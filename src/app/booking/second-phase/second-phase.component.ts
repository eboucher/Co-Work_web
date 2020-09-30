import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { BookingService } from '../booking.service';

@Component({
  selector: 'app-second-phase',
  templateUrl: './second-phase.component.html',
  styleUrls: ['./second-phase.component.scss']
})
export class SecondPhaseComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BookingService
  ) {}

  ngOnInit() {
  }

}