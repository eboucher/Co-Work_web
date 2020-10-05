import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookComponent } from './book';
import { FirstStepComponent } from './first-step';
import { SecondStepComponent } from './second-step';
import { ThirdStepComponent } from './third-step';

const bookingRoutes: Routes = [
  { path: 'book/:_id',  component: BookComponent,
    data: { animation: 'book' },
    children: [
      { path: 'first-step', component: FirstStepComponent, data: { animation: 'first-step' } },
      { path: 'second-step', component: SecondStepComponent, data: { animation: 'second-step' } },
      { path: 'third-step', component: ThirdStepComponent, data: { animation: 'third-step' } },
    ] 
  }
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