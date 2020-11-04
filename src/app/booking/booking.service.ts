import { Injectable, OnInit } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageService } from '../message.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Booking } from '../_models/booking';
import { Room, User } from '@app/_models';
import { AccountService } from '@app/_services';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookingService implements OnInit {

  private _url : string = 'http://localhost:1337/bookings/'

  private booking = new BehaviorSubject<Booking>(
    {
      id: "",
      room: "",
      date: "",
      start: "",
      end: "",
      user: this.accountService.userValue,
      mealTray: false,
      laptop: false,
    },
  );

  currentBooking = this.booking.asObservable();

  // ngOnInit somehow not executing
  ngOnInit(): void {
    console.log("booking = " + this.booking);
    console.log("this.accountService.userValue = " + this.accountService.userValue);
  }

  constructor(public accountService: AccountService, private http: HttpClient) { }

  changeBooking(booking: Booking) {
    booking.start = "17:30"
    this.booking.next(booking)
  }

  firstFormCompleted(booking: Booking) {
    return (booking.date != ""
      && booking.start != ""
      && booking.end != ""
      && booking.room != "");
  }

  getRoomByID(roomID: string): Observable<Room> {
    return this.http.get<Room>(`${environment.apiUrl}/rooms/${roomID}`)
    .pipe(map(resp => {
      return resp;
    }));
  }

  getBookingByID(bookingID: string): Observable<Room> {
    return this.http.get<Room>(`${environment.apiUrl}/bookings/${bookingID}`)
    .pipe(map(resp => {
      return resp;
    }));
  }
  
  createBooking(date: string, start: string, end: string, 
    mealTray: boolean, laptop: boolean, room: string, user: User) {
    return this.http.post<Booking>(this._url, {
      date,
      start,
      end,
      mealTray,
      laptop,
      room,
      user
    })
      .pipe(map(resp => {
        return resp;
      }));
  }
}