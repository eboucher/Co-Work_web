import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import * as data from "/home/esteban/Documents/ESGI/2-PA_R/Co-Work_web/db.json";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {

  locations : any[] = data.locations;

  profileForm = new FormGroup({
  });

  constructor() { }

}