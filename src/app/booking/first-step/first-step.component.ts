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
        console.log(e)
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
    // this.workspace.rooms.forEach(roomID => {
    //   const newRoom = this.getRoomByID(roomID).subscribe({
    //     next: (newRoom) => console.log(newRoom.id)
    //   });
    //   console.log("newRoom.bookings.lenght = " + JSON.stringify(newRoom))
    //   //const newRoom = new Room(room.id, room.name, room.roomType, room.bookings);
    //   if(this.isRoomAvailable(newRoom, this.booking.date, this.booking.start, this.booking.end)
    //       && newRoom.roomType == this.roomType) {
    //       this.booking.roomID = newRoom.id;
    //       return;
    //     }
    // })
    console.log("this.rooms = " + JSON.stringify(this.rooms));
  }

  public isDateOverlapping(startDate1: Number, endDate1: Number, 
    startDate2: Number, endDate2: Number) {

    return true;
  }

  public isRoomAvailable(room: Room, date: string, start: string, end: string): boolean {
    let bookDateYear = getYearFromString(date);
    let bookDateMonth = getMonthFromString(date);
    let bookDateDay = getDayFromString(date);

    let bookStart = new Date(start);
    let bookEnd = new Date(end);
    
    console.log("booking = " + room.name);
    // ranges overlap if (StartA <= EndB) and (EndA >= StartB)
    for(var i = 0; i <room.bookings.length; i++) {
      let roomDateYear = getYearFromString(room.bookings[i].date);
      let roomDateMonth = getMonthFromString(room.bookings[i].date);
      let roomDateDay = getDayFromString(room.bookings[i].date);

      if(bookDateYear == roomDateYear 
        && bookDateMonth == roomDateMonth 
        && bookDateDay == roomDateDay) {

          let roomStart = new Date(room.bookings[i].start);
          let roomEnd = new Date(room.bookings[i].end);

          if((bookStart <= roomEnd) && (bookEnd >= roomStart))
            return false;
        }
    }
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