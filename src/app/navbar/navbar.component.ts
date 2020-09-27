import { Component, OnInit } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  user: User;

  constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue;
    this.accountService.user.subscribe(x => this.user = x);
  }

  logout() {
      this.accountService.logout();
  }

  ngOnInit() {
  }

}