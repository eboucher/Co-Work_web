import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Location } from './location';
import { LOCATIONS } from './mock-locations';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class LocationService {

  constructor(private messageService: MessageService) { }

  getLocations(): Observable<Location[]> {
    // TODO: send the message _after_ fetching the locations
    this.messageService.add('LocationService: fetched locations');
    return of(LOCATIONS);
  }

  getLocation(id: number | string) {
    return this.getLocations().pipe(
      // (+) before `id` turns the string into a number
      map((locations: Location[]) => locations.find(location => location.locationID === +id))
    );
  }
}