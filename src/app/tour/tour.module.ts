import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TourComponent } from './tour/tour.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WhereToGoComponent } from './where-to-go/where-to-go.component';
import { WhatToDoComponent } from './what-to-do/what-to-do.component';
import { TourPackagesComponent } from './tour-packages/tour-packages.component';
import { GovernorateComponent } from './governorate/governorate.component';


const routes: Routes = [
  {
    path:'',
    component:WelcomePageComponent
  },
  {
    path:'tourPage',
    component:TourComponent
  },
  {
    path:'whereToGo',
    component:WhereToGoComponent
  },
  {
    path:'whatToDo',
    component:WhatToDoComponent
  },
  {
    path:'governator/:id',
    component:GovernorateComponent
  },

];
@NgModule({
  declarations: [
    TourComponent,
    WelcomePageComponent,
    NavbarComponent,
    FooterComponent,
    WhereToGoComponent,
    TourPackagesComponent,
    GovernorateComponent,

  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TourModule { }
