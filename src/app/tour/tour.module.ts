import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TourComponent } from './tour/tour.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';


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
    NavbarComponent,
    FooterComponent,

  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TourModule { }
