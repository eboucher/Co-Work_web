import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { HomeComponent } from './home';
import { PlansComponent } from './plans';
import { ContactComponent } from './contact';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { ProfileComponent } from './profile/profile.component';

// const accountModule = () => import('./account/account.module').then(x => x.AccountModule);

const routes: Routes = [
  // { path: 'account', loadChildren: accountModule },
  { path: '', component: HomeComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },
  { path: 'plans', component: PlansComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },

  // otherwise redirect to home
  //{ path: '**', redirectTo: '' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
