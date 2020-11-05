import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LocationService } from '@app/locations/location.service';
import { Room } from '@app/_models/room';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { Booking } from '../../_models/booking';
import { BookingService } from '../booking.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent implements OnInit {

  workspace: any;
  booking: Booking;
  roomType: string;
  rooms: any;
  roomAvailable: boolean;


  constructor(
    public bookingService: BookingService,
    private locationService: LocationService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.rooms = [];
    this.roomType = "";
    this.roomAvailable = false;
    this.locationService.location.rooms.map(room => {
      return this.bookingService.getRoomByID(room._id).subscribe(e => {
        this.rooms.push(e)
      });
    });

    this.workspace = this.locationService.location;
    this.bookingService.currentBooking.subscribe(booking => this.booking = booking);
  }

  setDate(newDate: string) {
    this.booking.date = newDate;
  }

  setStart(newStart: string) {
    this.booking.start = newStart;
  }

  setEnd(newEnd: string) {
    this.booking.end = newEnd;
    this.isValidRange();
  }

  firstFormCompleted() {
    let result = (this.booking.date != ""
    && this.booking.start != ""
    && this.booking.end != ""
    && this.roomType != ""
    && this.roomAvailable);
    return result;
  }

  setRoomType(roomType: string) {
    if(roomType == "Meeting room") {
      this.roomType = "meetingRoom"
      this.booking.room = ""
    }
    if(roomType == "Call room") {
      this.roomType = "callRoom"
      this.booking.room = ""
    }
    if(roomType == "Cozy lounge") {
      this.roomType = "cozyLounge"
      this.booking.room = ""
    }
    if(roomType == "") {
      this.roomType = ""
      this.booking.room = ""
    }
  }

  pickRoom() {
    for(let i = 0; i < this.rooms.length; i++) {
      if(this.rooms[i].roomType == this.roomType) {
        if(this.isRoomAvailable(this.rooms[i], this.booking.date, this.booking.start, this.booking.end)) {
          console.log("The room " + this.rooms[i].name + " is available.");
          this.booking.room = this.rooms[i].id;
          console.log("this.booking.room " + this.rooms[i].id);
          this.bookingService.firstStepCompleted = true;
          this.toastr.success("Room available found.")
          this.roomAvailable = true;
          return;
        } else {
          console.log("No " + this.roomType + " available.");
        }
      }
    }
    this.toastr.error("No available " + this.roomType + " was found.");
    return false;
  }

  public isValidRange(): boolean {

    let dateTime = new Date();

    let bookDateStart = convertToDate(this.booking.date, this.booking.start);
    let bookDateEnd = convertToDate(this.booking.date, this.booking.end);
    //console.log("dateTime = " + dateTime);
    //console.log("bookDateStart = " + bookDateStart);
    //console.log("bookDateEnd = " + bookDateEnd);
    if((dateTime < bookDateStart) && (bookDateStart < bookDateEnd)) {
      this.toastr.success("Time interval validated.");
      return true;
    }
    this.toastr.error("Please, select a valid time interval.");
    return false;
  }

  public isRoomAvailable(room: Room, date: string, 
    start: string, end: string): boolean {

    let bookDateStart = convertToDate(date, start);
    let bookDateEnd = convertToDate(date, end);

    for(var i = 0; i < room.bookings.length; i++) {

      let bookRoomStart = convertToDate(room.bookings[i].date, room.bookings[i].start);
      let bookRoomEnd = convertToDate(room.bookings[i].date, room.bookings[i].end);

      // ranges overlap if (StartA <= EndB) and (EndA >= StartB)
      if((bookDateStart <= bookRoomEnd) && (bookDateEnd >= bookRoomStart)) {
        console.log("Another booking starting at " + bookRoomStart.toString() + " overlaps with current interval.")
        return false;
      }
    }
    console.log("No overlapping found.")
    return true;
  }

}

export const getYearFromString = (year: string) => {
  return Number(year.split('-')[0]);
};

export const getMonthFromString = (month: string) => {
  return Number(month.split('-')[1]);
};

export const getDayFromString = (day: string) => {
  return Number(day.split('-')[2]);
};

export const getHourFromString = (hours: string) => {
  return Number(hours.split(':')[0]);
};

export const getMinuteFromString = (min: string) => {
  return Number(min.split(':')[1]);
};

export const convertToDate = (fullDate: string, time: string) => {
  let date = new Date();
  date.setFullYear(getYearFromString(fullDate));
  date.setMonth(getMonthFromString(fullDate));
  date.setDate(getDayFromString(fullDate));
  date.setHours(getHourFromString(time));
  date.setMinutes(getMinuteFromString(time));

  return date;
};