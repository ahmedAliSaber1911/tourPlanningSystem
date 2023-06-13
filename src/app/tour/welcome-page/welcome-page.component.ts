import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(private router : Router ) { }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate(['/auth/login'])
  }
  signUp(){
    this.router.navigate(['/auth/register'])
  }
  learnMore(){
    this.router.navigate(['/tour/tourPage'])
  }
}
