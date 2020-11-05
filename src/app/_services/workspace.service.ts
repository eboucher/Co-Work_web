import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { map } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';
import { Workspace } from '@app/_models';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  constructor(private http: HttpClient) { }

  getWorkspaceByID(id: string) {
      return this.http.get<Workspace>(`${environment.apiUrl}/workspaces/${id}`)
      .pipe(map(resp => {
        return resp;
      }));
  }

  book(): void { }

  deleteBooking(reservationID: string): any{ }

  addToolsToReservation(reservationID: string, toolIDs: string[]): any{ }

  removeToolsInReservation(reservationID: string, toolIDs: string[]): any { }

}