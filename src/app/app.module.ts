import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { RegisterComponent } from './auth/components/register/register.component';
import { AuthRoutingModule } from './auth/auth-routing/auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TourModule } from './tour/tour.module';
import { WhatToDoComponent } from './tour/what-to-do/what-to-do.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterComponent,
    WhatToDoComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    RouterModule,
    HttpClientModule,
    NgxSpinnerModule.forRoot({ type: 'timer' }),
    ToastrModule.forRoot(),
    TourModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
