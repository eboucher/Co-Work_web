import { Time } from '@angular/common';
import { Booking } from './booking';
import { OpenSpaceID } from './workspace';

export class Room {
  id: string;
  name: string;
  roomType: string;
  bookings: Booking[];
  openSpace: OpenSpaceID;

  isDateOverlapping(startDate1, endDate1, startDate2, endDate2) {
    return true;
  }

  isRoomAvailable(date: string, start: Time, end: Time): boolean {
    return true;
  }
}

