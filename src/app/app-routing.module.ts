import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './tour/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent ,
  },
   {
    path: 'tour',
    loadChildren: () =>
      import(`./tour/tour.module`).then(
        (m) => m.TourModule
      ),
  },

  {
    path: 'auth',
    loadChildren: () =>
      import(`./auth/auth-routing/auth-routing.module`).then(
        (m) => m.AuthRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
