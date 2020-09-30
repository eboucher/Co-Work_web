import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPhaseComponent } from './first-phase/first-phase.component';
import { SecondPhaseComponent } from './second-phase/second-phase.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookingRoutingModule } from './booking-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    FirstPhaseComponent, 
    SecondPhaseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BookingRoutingModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
  ]
})
export class BookingModule { }
