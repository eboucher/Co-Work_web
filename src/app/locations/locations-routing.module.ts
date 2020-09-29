import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationListComponent } from './location-list';
import { LocationDetailComponent } from './location-detail';

const locationsRoutes: Routes = [
  { path: 'locations',  component: LocationListComponent, data: { animation: 'locations' } },
  { path: 'location/:id', component: LocationDetailComponent, data: { animation: 'location' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(locationsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LocationsRoutingModule { }