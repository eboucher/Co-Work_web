import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Booking, User } from '@app/_models';
import { AccountService } from '@app/_services';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  user: User;
  bookings: Booking[];

  profileForm = new FormGroup({
  });

  constructor(public accountService: AccountService) {
  }

  ngOnInit(): void {
    this.user = this.accountService.userValue;
    this.bookings = [];
    console.log("Ça fonctionne.")
    this.accountService.getUserBookings(this.user.id).subscribe(e => 
      this.bookings = e);
  }

  deleteBooking(bookingID) {
    console.log("Booking " + bookingID + " deleted.")
    this.accountService.deleteBooking(bookingID).pipe(first()).subscribe(data => {
      this.accountService.getUserBookings(this.user.id).subscribe(e => 
        this.bookings = e);
    }, error => {
      console.log(error);
    });

  }

}
