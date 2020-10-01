import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookComponent } from './book';
import { FirstStepComponent } from './first-step';
import { SecondStepComponent } from './second-step';
import { ThirdStepComponent } from './third-step';

const bookingRoutes: Routes = [
  { path: 'book',  component: BookComponent, data: { animation: 'book' } },
  { path: 'book/first-step', component: FirstStepComponent, data: { animation: 'first-step' } },
  { path: 'book/second-step', component: SecondStepComponent, data: { animation: 'second-step' } },
  { path: 'book/third-step', component: ThirdStepComponent, data: { animation: 'third-step' } }
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