import { AfterViewChecked, Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { BookingService } from '../booking.service';
import { LocationService } from '@app/locations/location.service';

import { Location } from '@app/locations/location';
import { Booking } from '../booking';

declare var $: any;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
//, AfterViewChecked
export class BookComponent implements OnInit {

  locationID: string;
  location: any;
  booking: Booking;

  profileForm = new FormGroup({
  });

  constructor(
    private data: BookingService,
    private route: ActivatedRoute,
    private locationService: LocationService,
  ) {}

  // ngAfterViewChecked(): void {
  //   // Data Picker Initialization
  //   // @ts-ignore
  //   $('.datepicker').datepicker({ inline: true });
  // }

  ngOnInit() {

    this.data.currentBooking.subscribe(booking => this.booking = booking)

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.locationID = params.get('_id');
      this.locationService.getLocationByID(this.locationID).pipe(first())
        .subscribe(
          data => {
            console.log("this.location = " + JSON.stringify(data));
            this.location = data;
          },
          error => {
            console.log(error);
          });
    });
  }

}