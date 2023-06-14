import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  entered!:boolean ;
  constructor(private router: Router) {
    this.entered =  environment.entered
   }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate(['/auth/login']);
  }
  signUp(){
    this.router.navigate(['/auth/register']);
  }
  logout(){
    this.router.navigate(['/auth/login'])
  }
}
