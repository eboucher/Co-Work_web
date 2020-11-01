import { Injectable, OnInit } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageService } from '../message.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Booking } from '../_models/booking';
import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Injectable({
  providedIn: 'root',
})
export class BookingService implements OnInit {

  private booking = new BehaviorSubject<Booking>(
    {
      date: "",
      start: "",
      end: "",
      user: this.accountService.userValue.user,
      room: null,
      mealTray: false,
      laptop: false,
    },
  );
  currentBooking = this.booking.asObservable();

  // ngOnInit somehow not executing
  ngOnInit(): void {
    console.log("booking = " + this.booking);
  }

  constructor(private bookingService: MessageService, 
              public accountService: AccountService) { }

  changeBooking(booking: Booking) {
    booking.start = "17:30"
    this.booking.next(booking)
  }
  
}