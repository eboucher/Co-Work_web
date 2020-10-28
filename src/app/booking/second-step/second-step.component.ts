import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { BookingService } from '../booking.service';
import { LocationService } from '@app/locations/location.service';
import { Booking } from '../booking';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent implements OnInit {

  location: any;
  booking: Booking;

  constructor(
    private data: BookingService,
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private locationService: LocationService,
  ) {}

  ngOnInit() {
    this.data.currentBooking.subscribe(booking => this.booking = booking)
    this.location = this.locationService.location;
  }

  newBooking() {
    this.booking.start = "17:30"
    this.data.changeBooking(this.booking)
  }

}