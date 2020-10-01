import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { BookingService } from '../booking.service';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.scss']
})
export class ThirdStepComponent implements OnInit {


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
