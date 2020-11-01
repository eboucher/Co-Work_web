import { Booking } from './booking';
import { OpenSpaceID } from './workspace';

export class Room {
  id: string;
  name: string;
  description: string;
  openSpace: OpenSpaceID;
  bookings: Booking[];

  isDateOverlapping(startDate1, endDate1, startDate2, endDate2) {
    return (startDate1 <= endDate2) && (endDate1 >= startDate2);
  }


  isRoomAvailable(date: string, start: string, end: string): boolean {
    
    for (let i = 0; i < this.bookings.length; i++) {
      const booking: Booking = this.bookings[i];
      if (booking.room.id === this.id) {
        if (this.isDateOverlapping(new Date(booking.start), 
                                   new Date(booking.end), 
                                   start, end)) {
          console.log('Chosen date and time overlap with an existing booking.');
          return false;
        }
      }
    }
    return true;
  }
}

