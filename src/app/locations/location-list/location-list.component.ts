import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

//import * as data from "/home/esteban/Documents/ESGI/2-PA_R/Co-Work_web/db.json";

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { LocationService } from '../location.service';
import { Location } from '../location';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  locations$: Observable<Location[]>;
  selectedId: number;

  //locations : any[] = data.locations;

  profileForm = new FormGroup({
  });

  constructor(
    private service: LocationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.locations$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getLocations();
      })
    );
  }

}