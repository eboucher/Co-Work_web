import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { AccountService } from '@app/_services';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  movies: any[] = [
  {
    "name": "Avengers: Endgame"
  },
  {
    "name": "Good Boys"
  },
  {
    "name": "Playmobil: The Movie"
  },
  {
    "name": "Aquarela"
  },
  {
    "name": "Aladdin"
  }, 
  {
    "name": "Downton Abbey"
  }
];

  user: User;

  constructor(public accountService: AccountService) {
  }

  ngOnInit(): void {
    this.user = this.accountService.userValue;
  }

}
