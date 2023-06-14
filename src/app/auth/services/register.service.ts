import { signUp } from './../interfaces/signUp';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) {
  }
  signUp(model: signUp){
   return this.http.post("http://localhost:3001/api/v1/users/signup" , model)
  }
}
