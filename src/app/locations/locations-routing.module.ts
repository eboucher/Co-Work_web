import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationsListComponent } from './locations-list';
import { LocationDetailComponent } from './location-detail';

const heroesRoutes: Routes = [
  { path: 'locations', redirectTo: '/superheroes' },
  { path: 'location/:id', redirectTo: '/superhero/:id' },
  { path: 'superheroes',  component: LocationsListComponent, data: { animation: 'locations' } },
  { path: 'superhero/:id', component: LocationDetailComponent, data: { animation: 'location' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LocationsRoutingModule { }