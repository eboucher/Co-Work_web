import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LocationService } from '@app/locations/location.service';
import { first } from 'rxjs/operators';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent implements OnInit {

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
}
