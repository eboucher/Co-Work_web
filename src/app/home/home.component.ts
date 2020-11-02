import { Component, OnInit } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User;

  constructor(public accountService: AccountService) {
  }

  ngOnInit(): void {
    this.user = this.accountService.userValue;
    console.log("this.user = " + JSON.stringify(this.user))
  }

}
