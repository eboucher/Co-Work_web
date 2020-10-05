import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { LocationsModule } from './locations';
import { BookingModule } from './booking';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer';
import { NavbarComponent } from './navbar';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { PlansComponent } from './plans';
import { ContactComponent } from './contact/contact.component';

import * as $ from 'jquery'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    PlansComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LocationsModule,
    BookingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
