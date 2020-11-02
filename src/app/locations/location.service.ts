import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Workspace } from '@app/_models/workspace';
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
    return this.http.get<Workspace[]>(this._url+id)
      .pipe(map(resp => {
        this.location = resp;
        return resp;
      }));
  }

  getLocations(): Observable<Workspace[]> {
    return this.http.get<Workspace[]>(this._url);
  }

  getLocation(id: number | string): Observable<Workspace> {
    return this.getLocations().pipe(
      map((locations: Workspace[]) => locations.find(location => location.id === id))
    );
  }
}