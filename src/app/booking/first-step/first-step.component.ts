import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LocationService } from '@app/locations/location.service';
import { first } from 'rxjs/operators';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent implements OnInit {

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
