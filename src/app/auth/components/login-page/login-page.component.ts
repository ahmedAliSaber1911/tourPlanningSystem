import { environment } from './../../../../environments/environment';
import { Router } from '@angular/router';
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
    ) {
      // this for showing the login buttom and hide logout or verse
      environment.entered = true
    }

  loginForm!: FormGroup;
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      //[the initial value , array of validators ]
      email: ['ahmed@gmail.com', [Validators.required, Validators.email]],
      password: [
        '12341234',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ],
      ],
    });
  }
  login() {
    if(this.loginForm.valid){
    this.spinner.show();
    // i pass the modal contain data i will check
    this.service.login(this.loginForm.value).subscribe(res=>{
      // toastr is a ngx component used for show popup message whether in success or in error
      this.toastr.success("success" , 'Login Successfully');
      this.router.navigate(["/tour/tourPage"]);
      this.spinner.hide();
      environment.entered = false
    } , error =>{
      console.log(error)
      this.toastr.error('incorrect password or email');
      this.spinner.hide();

    })
  }}

}
