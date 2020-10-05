import { AfterViewChecked, Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { BookingService } from '../booking.service';

declare var $: any;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, AfterViewChecked {

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