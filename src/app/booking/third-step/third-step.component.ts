import { Component, OnInit } from '@angular/core';
import { first, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { BookingService } from '../booking.service';
import { LocationService } from '@app/locations/location.service';
import { Booking } from '@app/_models';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.scss']
})
export class ThirdStepComponent implements OnInit {

  booking: Booking;

  profileForm = new FormGroup({
  });

  location: any;

  constructor(
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private locationService: LocationService,
  ) {}

  ngOnInit() {
    this.location = this.locationService.location;
    this.bookingService.currentBooking.subscribe(booking => this.booking = booking);
  }

  createBooking() {
    this.bookingService.createBooking(
      this.booking.date, 
      this.booking.start, 
      this.booking.end, 
      this.booking.mealTray, 
      this.booking.laptop, 
      this.booking.roomID, 
      this.booking.user
      ).pipe(first())
    .subscribe(
      data => {},
      error => {
        console.log(error);
      });
  }
}
