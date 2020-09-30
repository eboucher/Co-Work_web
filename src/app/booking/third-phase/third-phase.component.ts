import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { BookingService } from '../booking.service';

@Component({
  selector: 'app-third-phase',
  templateUrl: './third-phase.component.html',
  styleUrls: ['./third-phase.component.scss']
})
export class ThirdPhaseComponent implements OnInit {


  profileForm = new FormGroup({
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BookingService
  ) {}

  ngOnInit(): void {
  }

}
