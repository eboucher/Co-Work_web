import { Component, OnInit } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  user: User;

  constructor(private accountService: AccountService, private router: Router) {
    this.user = this.accountService.userValue;
    this.accountService.user.subscribe(x => this.user = x);
  }

  gotoLocations() {
    // Pass along the location id if available
    // so that the LocationList component can select that location.
    //("Bonjour à tous !")
    this.router.navigate(['/locations', {}]);
  }

  logout() {
      this.accountService.logout();
  }

  ngOnInit() {
  }

}