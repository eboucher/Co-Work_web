import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { BookingService } from '../booking.service';
import { LocationService } from '@app/locations/location.service';
import { Booking } from '../../_models/booking';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent implements OnInit {

  location: any;
  booking: Booking;

  constructor(
    private bookingService: BookingService,
    private locationService: LocationService,
  ) {}

  ngOnInit() {
    this.location = this.locationService.location;
    this.bookingService.currentBooking.subscribe(booking => this.booking = booking);
  }

  addLaptop() {
    this.booking.laptop = true;
  }

  removeLaptop() {
    this.booking.laptop = false;
  }

  addMealTray() {
    this.booking.mealTray = true;
  }

  removeMealTray() {
    this.booking.mealTray = false;
  }

  newBooking() {
    this.booking.start = "17:30"
    this.bookingService.changeBooking(this.booking)
  }

}