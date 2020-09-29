import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LocationsListComponent } from './locations-list';
import { LocationDetailComponent } from './location-detail';

import { LocationsRoutingModule } from './locations-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LocationsRoutingModule
  ],
  declarations: [
    LocationsListComponent,
    LocationDetailComponent
  ]
})
export class LocationsModule { }
