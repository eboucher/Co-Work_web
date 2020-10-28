import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageService } from '../message.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {


  private booking = new BehaviorSubject<Booking>(
    {
      start: "14:00",
      end: "16:00",
      user: "Vladimir",
      call_room: "Number 1",
      cozy_louge: "null",
      meeting_room: "null",
      mealTray: true,
      laptop: true,
      date: "29/10/2020",
      created_by: "someone",
      updated_by: "also someone"
    },
  );
  currentBooking = this.booking.asObservable();

  constructor(private bookingService: MessageService) { }

  changeBooking(booking: Booking) {
    booking.start = "17:30"
    this.booking.next(booking)
  }
  
}