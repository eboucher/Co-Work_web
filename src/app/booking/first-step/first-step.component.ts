import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LocationService } from '@app/locations/location.service';
import { Room } from '@app/_models/room';
import { first } from 'rxjs/operators';
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

  constructor(
    public bookingService: BookingService,
    private locationService: LocationService,
  ) {}

  ngOnInit() {
    this.workspace = this.locationService.location;
    this.bookingService.currentBooking.subscribe(booking => this.booking = booking);
  }

  setDate(newDate: string) {
    this.booking.date = newDate;
    console.log("this.booking.date = " + newDate);
    console.log("this.bookingService.firstFormCompleted() = " 
    + this.bookingService.firstFormCompleted(this.booking));
  }

  setStart(newStart: string) {
    this.booking.start = newStart;
    console.log("this.booking.start = " + this.booking.start);
    console.log("this.bookingService.firstFormCompleted() = " 
    + this.bookingService.firstFormCompleted(this.booking));
  }

  setEnd(newEnd: string) {
    this.booking.end = newEnd;
    console.log("this.booking.end = " + this.booking.end);
    console.log("this.bookingService.firstFormCompleted() = " 
    + this.bookingService.firstFormCompleted(this.booking));
  }

  setRoomType(roomType: string) {
    this.roomType = roomType;
    console.log("this.roomType = " + this.roomType);
    console.log("this.bookingService.firstFormCompleted() = " 
    + this.bookingService.firstFormCompleted(this.booking));
  }

  pickRoom() {
    console.log("The room is available.");
    for (let i = 0; (i < this.workspace.rooms.length) 
        && (this.workspace.rooms[i].roomType == this.roomType);
        i++) 
    {
      if (this.workspace.rooms[i].isRoomAvailable(this.booking.date, 
        this.booking.start, this.booking.end)) {
          console.log("The room is available.");
          this.booking.room = this.workspace.rooms[i];
          console.log("this.booking.room = " + this.booking.room.name);
        }
    }
  }
}
