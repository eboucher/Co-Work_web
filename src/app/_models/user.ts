import { BookingService } from '@app/booking/booking.service';
import { Booking } from '.';
import { Subscription } from './subscription';

export class User {
    jwt: string;
    user: any;
    id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    subscription: Subscription;
    bookings: Booking[];
}