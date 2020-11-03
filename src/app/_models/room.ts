import { Time } from '@angular/common';
import { Booking } from './booking';
import { OpenSpaceID } from './workspace';

export class Room {

  constructor(public id: string, 
    public name: string, 
    public roomType: string, 
    public bookings: Booking[]) {}

  public isDateOverlapping(startDate1, endDate1, startDate2, endDate2) {
    return true;
  }

  public isRoomAvailable(date: string, start: string, end: string): boolean {
    return true;
  }
}

