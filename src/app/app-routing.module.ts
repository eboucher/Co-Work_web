import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { HomeComponent } from './home';
import { LocationsComponent } from './locations';
import { LocationComponent } from './location';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ]
  },
  { path: 'locations', component: LocationsComponent },
  { path: 'location', component: LocationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
