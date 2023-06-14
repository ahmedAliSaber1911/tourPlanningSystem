import { Router } from '@angular/router';
import { login } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
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
    private service : LoginService,
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService,
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
    this.spinner.show();
    // i pass the modal contain data i will check
    this.service.login(this.loginForm.value).subscribe(res=>{
      // toastr is a ngx component used for show popup message whether in success or in error
      this.toastr.success("success" , 'Login Successfully');
      this.spinner.hide();
    } , error =>{
      this.toastr.error(error);
      this.spinner.hide();
      this.router.navigate(["/tour/tourPage"])
    })
  }
}
