import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  registerForm!: FormGroup;
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ],
      ],
      passwordConfirm: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ],
      ],
      city: ['', [Validators.required]],
      // role:['',[Validators.required]],
    },{validators: this.checkPassword});

  }
  signUp() {
    console.log(this.registerForm.value);
  }
  //custom validator will be added to the formgroup and be executed
  checkPassword:ValidatorFn = (group:AbstractControl):ValidationErrors | null=>{
    let password = group.get('password')?.value;
    let passwordConfirm = group.get('passwordConfirm')?.value;
    return password === passwordConfirm ? null : {notMatch : true};
  }
}
