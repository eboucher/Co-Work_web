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

  constructor(
    public bookingService: BookingService,
    private locationService: LocationService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.rooms = []
    this.locationService.location.rooms.map(room => {
      return this.bookingService.getRoomByID(room._id).subscribe(e => {
        this.rooms.push(e)
      }
      );
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
  }

  setRoomType(roomType: string) {
    if(roomType == "Meeting room")
      this.roomType = "meetingRoom"
    if(roomType == "Call room")
      this.roomType = "callRoom"
    if(roomType == "Cozy lounge")
      this.roomType = "cozyLouge"
  }

  pickRoom() {
    for(let i = 0; i < this.rooms.length; i++) {
      if(this.rooms[i].roomType == this.roomType) {
        if(this.isRoomAvailable(this.rooms[i], this.booking.date, this.booking.start, this.booking.end)) {
          console.log("The room " + this.rooms[i].name + " is available.");
          this.booking.room = this.rooms[i].id;
          console.log("this.booking.room " + this.rooms[i].id);
          return;
        } else {
          console.log("No " + this.roomType + " available.");
        }
      }
    }
  }

  public isRoomAvailable(room: Room, date: string, 
    start: string, end: string): boolean {

    let bookDateStart = new Date();
    bookDateStart.setFullYear(getYearFromString(date));
    bookDateStart.setMonth(getMonthFromString(date));
    bookDateStart.setDate(getDayFromString(date));
    bookDateStart.setHours(getHourFromString(start));
    bookDateStart.setMinutes(getMinuteFromString(start));
    

    let bookDateEnd = new Date();
    bookDateEnd.setFullYear(getYearFromString(date));
    bookDateEnd.setMonth(getMonthFromString(date));
    bookDateEnd.setDate(getDayFromString(date));
    bookDateEnd.setHours(getHourFromString(end));
    bookDateEnd.setMinutes(getMinuteFromString(end));

    for(var i = 0; i < room.bookings.length; i++) {

      let bookRoomStart = new Date();
      bookRoomStart.setFullYear(getYearFromString(room.bookings[i].date));
      bookRoomStart.setMonth(getMonthFromString(room.bookings[i].date));
      bookRoomStart.setDate(getDayFromString(room.bookings[i].date));
      bookRoomStart.setHours(getHourFromString(room.bookings[i].start));
      bookRoomStart.setMinutes(getMinuteFromString(room.bookings[i].start));

      let bookRoomEnd = new Date();
      bookRoomEnd.setFullYear(getYearFromString(room.bookings[i].date));
      bookRoomEnd.setMonth(getMonthFromString(room.bookings[i].date));
      bookRoomEnd.setDate(getDayFromString(room.bookings[i].date));
      bookRoomEnd.setHours(getHourFromString(room.bookings[i].end));
      bookRoomEnd.setMinutes(getMinuteFromString(room.bookings[i].end));

      
      //console.log("- Comparing with " + bookRoomStart + " to " + bookRoomEnd);
      // ranges overlap if (StartA <= EndB) and (EndA >= StartB)
      if((bookDateStart <= bookRoomEnd) && (bookDateEnd >= bookRoomStart)) {
        console.log("Another booking starting at " + bookRoomStart.toString() + " overlaps with current interval.")
        return false;
      }
      console.log("No overlapping found.")
    }
    return true;
  }

  public isDateOverlapping(startDate1: Number, endDate1: Number, 
    startDate2: Number, endDate2: Number) {

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