import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import * as data from "/home/esteban/Documents/ESGI/2-PA_R/Co-Work_web/db.json";

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss']
})
export class LocationsListComponent {

  locations : any[] = data.locations;

  profileForm = new FormGroup({
  });

  constructor() { }

}