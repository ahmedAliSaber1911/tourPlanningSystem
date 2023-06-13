import { login } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    //The FormBuilder provides syntactic sugar that shortens creating instances of a FormControl, FormGroup, or FormArray.
    //It reduces the amount of boilerplate needed to build complex forms.
    private fb: FormBuilder,
    private service : LoginService

    ) {}
  // to save the data on
  user =[
    {
      userName: 'ahmedalisaber965@gmail.com',
      password:'12341234'
    }
  ]
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      //[the initial value , array of validators ]
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ],
      ],
    });
  }
  login() {
    // i pass the modal contain data i will check
    this.service.login(this.loginForm.value).subscribe(res=>{

    } , error =>{

    })
  }
}
