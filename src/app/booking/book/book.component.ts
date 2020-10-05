import { AfterViewChecked, Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { BookingService } from '../booking.service';
import { LocationService } from '@app/locations/location.service';

declare var $: any;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
//, AfterViewChecked
export class BookComponent implements OnInit {

  locationID: string;

  location$: any;

  profileForm = new FormGroup({
  });

  constructor(
    private service: BookingService,
    private route: ActivatedRoute,
    private locService: LocationService,
  ) {}

  // ngAfterViewChecked(): void {
  //   // Data Picker Initialization
  //   // @ts-ignore
  //   $('.datepicker').datepicker({ inline: true });
  // }

  ngOnInit() {
    this.location$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.locService.getLocation(params.get('_id')))
    );
  }

}