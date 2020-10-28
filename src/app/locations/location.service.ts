import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Location } from './location';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocationService {

  location: any;

  constructor(private http: HttpClient) { }

  private _url : string = 'http://localhost:1337/workspaces/'

  getLocationByID(id: string) : any {
    return this.http.get<Location[]>(this._url+id)
      .pipe(map(resp => {
        this.location = resp;
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        return resp;
      }));
  }

  getLocations(): Observable<Location[]> {
    // TODO: send the message _after_ fetching the locations
    //this.messageService.add('LocationService: fetched locations');
    //return of(LOCATIONS);
    return this.http.get<Location[]>(this._url);
  }

  getLocation(id: number | string): Observable<Location> {
    return this.getLocations().pipe(
      // (+) before `id` turns the string into a number
      map((locations: Location[]) => locations.find(location => location._id === id))
    );
  }
}