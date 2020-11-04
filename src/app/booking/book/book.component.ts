import { AfterViewChecked, Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { BookingService } from '../booking.service';
import { LocationService } from '@app/locations/location.service';

import { Workspace } from '@app/_models/workspace';
import { Booking } from '../../_models/booking';
import { User } from '@app/_models';
import { AccountService } from '@app/_services';

declare var $: any;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
//, AfterViewChecked
export class BookComponent implements OnInit {

  locationID: string;
  location: Workspace;
  booking: Booking;

  profileForm = new FormGroup({});

  constructor(
    public bookingService: BookingService,
    private route: ActivatedRoute,
    private locationService: LocationService,
    public accountService: AccountService,
  ) {}

  ngOnInit(): void {
    this.bookingService.currentBooking.subscribe(booking => this.booking = booking)
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.locationID = params.get('_id');
      this.locationService.getLocationByID(this.locationID).pipe(first())
        .subscribe(
          data => {
            this.location = data;
          },
          error => {
            console.log(error);
          });
    });
  }

  
}