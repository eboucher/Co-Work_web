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

  constructor(
    private bookingService: BookingService,
    private locationService: LocationService,
  ) {}

  ngOnInit() {
    this.workspace = this.locationService.location;
    this.bookingService.currentBooking.subscribe(booking => this.booking = booking);
  }

  updateDate(newDate) {
    this.booking.date = newDate;
    console.log("this.booking.date = " + newDate);
  }

  updateStart(newStart) {
    this.booking.start = newStart;
    console.log("this.booking.start = " + this.booking.start);
  }

  updateEnd(newEnd) {
    this.booking.end = newEnd;
    console.log("this.booking.end = " + this.booking.end);
  }

  pickRoom(roomType) {
    console.log("Looking for " + roomType + " availability...");
    for (let i = 0; (i < this.workspace.rooms.length) 
        && this.workspace.rooms[i].roomType == roomType;
        i++) 
    {
      if (this.workspace.rooms[i].isRoomAvailable(this.booking.date, 
        this.booking.start, this.booking.end)) {
          // pick the room!
        }
    }
  }
}
