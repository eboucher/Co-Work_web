import { Component, OnInit } from '@angular/core';
import { LocationService } from '@app/locations/location.service';
import { Booking } from '@app/_models';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  booking: Booking;
  location: any;

  constructor(
    private bookingService: BookingService,
    private locationService: LocationService) { }

  ngOnInit(): void {
    this.location = this.locationService.location;
    this.bookingService.currentBooking.subscribe(booking => this.booking = booking);
  }

}
