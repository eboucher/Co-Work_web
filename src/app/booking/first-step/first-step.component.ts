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
    this.workspace.rooms.forEach(room => {
      const newRoom = new Room(room.id, room.name, room.roomType, room.bookings);
      if(newRoom.isRoomAvailable(this.booking.date, this.booking.start, this.booking.end)
          && newRoom.roomType == this.roomType) {
          this.booking.room = newRoom;
          return;
        }
    })
  }
}
