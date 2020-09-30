import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { BookingService } from '../booking.service';

declare var $: any;

@Component({
  selector: 'app-first-phase',
  templateUrl: './first-phase.component.html',
  styleUrls: ['./first-phase.component.scss']
})
export class FirstPhaseComponent implements OnInit, AfterViewChecked {


  profileForm = new FormGroup({
  });

  constructor(
    private service: BookingService,
    private route: ActivatedRoute
  ) {}

  ngAfterViewChecked(): void {
    // Data Picker Initialization
    // @ts-ignore
    $('.datepicker').datepicker({ inline: true });
  }
  
  ngOnInit() {
  }

}