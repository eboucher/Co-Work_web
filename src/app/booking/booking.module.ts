import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book';
import { FirstStepComponent } from './first-step';
import { SecondStepComponent } from './second-step';
import { ThirdStepComponent } from './third-step';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookingRoutingModule } from './booking-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SummaryComponent } from './summary';



@NgModule({
  declarations: [
    BookComponent, 
    FirstStepComponent,
    SecondStepComponent, 
    ThirdStepComponent,
    SummaryComponent
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
