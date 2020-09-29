import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { LocationService } from '../location.service';
import { Location } from '../location';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent implements OnInit {
  location$: Observable<Location>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: LocationService
  ) {}


  ngOnInit() {
    this.location$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getLocation(params.get('id')))
    );
  }

  gotoLocations() {
    console.log("Bonjour à tous !")
    this.router.navigate(['/locations']);
  }
}