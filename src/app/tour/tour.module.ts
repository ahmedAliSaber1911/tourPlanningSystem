import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TourComponent } from './tour/tour.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {
    path:'',
    component:WelcomePageComponent
  },
  {
    path:'tourPage',
    component:TourComponent
  }
];
@NgModule({
  declarations: [
    TourComponent,
    WelcomePageComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class TourModule { }
