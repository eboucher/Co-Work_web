import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstPhaseComponent } from './first-phase';
import { SecondPhaseComponent } from './second-phase';
import { ThirdPhaseComponent } from './third-phase';

const bookingRoutes: Routes = [
  { path: 'first-phase',  component: FirstPhaseComponent, data: { animation: 'first-phase' } },
  { path: 'second-phase', component: SecondPhaseComponent, data: { animation: 'second-phase' } },
  { path: 'third-phase', component: ThirdPhaseComponent, data: { animation: 'third-phase' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(bookingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BookingRoutingModule { }