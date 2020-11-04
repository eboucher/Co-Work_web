import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '@app/_models';
import { AccountService } from '@app/_services';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  user: User;

  profileForm = new FormGroup({
  });

  constructor(public accountService: AccountService) {
  }

  ngOnInit(): void {
    this.user = this.accountService.userValue;
  }

  deleteBooking(bookingID) {
    console.log("Booking " + bookingID + " deleted.")
  }

}
