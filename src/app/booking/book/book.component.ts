import { AfterViewChecked, Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { BookingService } from '../booking.service';
import { LocationService } from '@app/locations/location.service';

import { Location } from '@app/locations/location';

declare var $: any;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
//, AfterViewChecked
export class BookComponent implements OnInit {

  locationID: string;

  location$: Observable<Location>;

  profileForm = new FormGroup({
  });

  constructor(
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private locationService: LocationService,
  ) {}

  // ngAfterViewChecked(): void {
  //   // Data Picker Initialization
  //   // @ts-ignore
  //   $('.datepicker').datepicker({ inline: true });
  // }

  ngOnInit() {
    this.location$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.locationService.getLocation(params.get('_id')))
    );
    console.log("this.location$ = " + this.location$);
  }

}