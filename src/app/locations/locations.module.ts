import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LocationListComponent } from './location-list';
import { LocationDetailComponent } from './location-detail';

import { LocationsRoutingModule } from './locations-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LocationsRoutingModule
  ],
  declarations: [
    LocationListComponent,
    LocationDetailComponent
  ]
})
export class LocationsModule { }
