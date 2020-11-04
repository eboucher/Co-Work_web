import { Time } from '@angular/common';
import { Booking } from './booking';
import { OpenSpaceID } from './workspace';


export class Room {

  constructor(public id: string, 
    public name: string, 
    public roomType: string, 
    public bookings: Booking[]) {}

  public isDateOverlapping(startDate1: Number, endDate1: Number, 
    startDate2: Number, endDate2: Number) {

    return true;
  }

  public isRoomAvailable(date: string, start: string, end: string): boolean {
    let bookDateYear = getYearFromString(date);
    let bookDateMonth = getMonthFromString(date);
    let bookDateDay = getDayFromString(date);

    // let bookStartHour = getHourFromString(start);
    // let bookStartMin = getMinuteFromString(start);
    // let bookEndHour = getHourFromString(end);
    // let bookEndMin = getMinuteFromString(end);

    let bookStart = new Date(start);
    let bookEnd = new Date(end);
    
    console.log("booking = " + this.name);
    // ranges overlap if (StartA <= EndB) and (EndA >= StartB)
    for(var i = 0; i < this.bookings.length; i++) {
      let roomDateYear = getYearFromString(this.bookings[i].date);
      let roomDateMonth = getMonthFromString(this.bookings[i].date);
      let roomDateDay = getDayFromString(this.bookings[i].date);

      if(bookDateYear == roomDateYear 
        && bookDateMonth == roomDateMonth 
        && bookDateDay == roomDateDay) {
          // let roomStartHour = getHourFromString(this.bookings[i].start);
          // let roomStartMin = getMinuteFromString(this.bookings[i].start);
          // let roomEndHour = getHourFromString(this.bookings[i].end);
          // let roomEndMin = getMinuteFromString(this.bookings[i].end);

          let roomStart = new Date(this.bookings[i].start);
          let roomEnd = new Date(this.bookings[i].end);

          if((bookStart <= roomEnd) && (bookEnd >= roomStart))
            return false;
        }
    }
    return true;
  }
}


export const getYearFromString = (year: string) => {
  return Number(year.split('-')[0]);
};

export const getMonthFromString = (month: string) => {
  return Number(month.split('-')[1]);
};

export const getDayFromString = (day: string) => {
  return Number(day.split('-')[2]);
};

export const getHourFromString = (hours: string) => {
  return Number(hours.split(':')[0]);
};

export const getMinuteFromString = (min: string) => {
  return Number(min.split(':')[1]);
};