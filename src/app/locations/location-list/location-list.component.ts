import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

//import * as data from "/home/esteban/Documents/ESGI/2-PA_R/Co-Work_web/db.json";

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { LocationService } from '../location.service';
import { Workspace } from '@app/_models/workspace';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  locations$: Observable<Workspace[]>;
  selectedId: string;

  //locations : any[] = data.locations;

  profileForm = new FormGroup({
  });

  constructor(
    private locationService: LocationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.locations$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = params.get('id');
        return this.locationService.getLocations();
      })
    );
  }

}