import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  // i wait for modal as parameter of type login (interface)  to the login method
  // login(modal:login){

  //   // return this.http
  // }
}
