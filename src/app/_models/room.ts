import { Time } from '@angular/common';
import { Booking } from './booking';
import { OpenSpaceID } from './workspace';


export class Room {

  constructor(public id: string, 
    public name: string, 
    public roomType: string, 
    public bookings: Booking[]) {}
}