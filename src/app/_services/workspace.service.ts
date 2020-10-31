import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { map } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenSpaceService {

  constructor(private http: HttpClient) { }

  book(): void { }

  deleteBooking(reservationID: string): any{ }

  addToolsToReservation(reservationID: string, toolIDs: string[]): any{ }

  removeToolsInReservation(reservationID: string, toolIDs: string[]): any { }

}