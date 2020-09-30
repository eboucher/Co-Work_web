import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPhaseComponent } from './first-phase';
import { SecondPhaseComponent } from './second-phase';
import { ThirdPhaseComponent } from './third-phase';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookingRoutingModule } from './booking-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    FirstPhaseComponent, 
    SecondPhaseComponent, 
    ThirdPhaseComponent
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
