import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TourComponent } from './tour/tour.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WhereToGoComponent } from './where-to-go/where-to-go.component';
import { WhatToDoComponent } from './what-to-do/what-to-do.component';
import { TourPackagesComponent } from './tour-packages/tour-packages.component';
import { GovernorateComponent } from './governorate/governorate.component';
import { ThingToDoComponent } from './thing-to-do/thing-to-do.component';


const routes: Routes = [

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
  {
    path:'thingToDo/:id',
    component:ThingToDoComponent
  },
  {
    path:'packages',
    component:TourPackagesComponent
  },
];
@NgModule({
  declarations: [
    TourComponent,
    NavbarComponent,
    FooterComponent,
    WhereToGoComponent,
    TourPackagesComponent,
    GovernorateComponent,
    WhatToDoComponent,
    ThingToDoComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TourModule { }
