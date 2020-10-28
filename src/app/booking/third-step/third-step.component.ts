import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { BookingService } from '../booking.service';
import { LocationService } from '@app/locations/location.service';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.scss']
})
export class ThirdStepComponent implements OnInit {


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
  }

}
