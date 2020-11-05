import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { LocationService } from '../location.service';
import { Workspace } from '@app/_models/workspace';
import { Room } from '@app/_models';
import { WorkspaceService } from '@app/_services/workspace.service';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent implements OnInit {
  location$: Observable<Workspace>;

  workspaceID: string;
  workspace: Workspace;
  noMeetingRooms: number;
  noCallRooms: number;
  noCozyLounges: number;
  rooms: Room[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: LocationService,
    public workspaceService: WorkspaceService
  ) {}


  ngOnInit() {
    this.noMeetingRooms = 0;
    this.noCallRooms = 0;
    this.noCozyLounges = 0;
    this.location$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getLocation(params.get('id')))
    );

    this.route.params.subscribe(params => {
      console.log('The id of this route is: ', params.id);
      this.workspaceID = params.id;
    });
    this.workspaceService.getWorkspaceByID(this.workspaceID).subscribe(e => {
        console.log("RÉPONSE e = " + e),
        this.workspace = e,
        console.log("this.workspace = " + this.workspace.rooms[0].roomType),

        this.workspace.rooms.forEach(room => {
          console.log("room = " + JSON.stringify(room))
          if(room.roomType == "meetingRoom")
            this.noMeetingRooms += 1;
          if(room.roomType == "callRoom")
            this.noCallRooms += 1;
          if(room.roomType == "cozyLouge")
            this.noCozyLounges += 1;
        });
      });
  }
}
