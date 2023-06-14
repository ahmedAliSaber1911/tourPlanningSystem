import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from './../../services/register.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}
  registerForm!: FormGroup;
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.registerForm = this.fb.group(
      {
        name: ['ahmed', [Validators.required, Validators.minLength(5)]],
        email: ['ahmed@gmail.com', [Validators.required, Validators.email]],
        password: [
          '12341234',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20),
          ],
        ],
        passwordConfirm: [
          '12341234',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20),
          ],
        ],
        city: ['cairo', [Validators.required]],
        role: ['user'],
        passwordChangedAt: ['now'],
      },
      { validators: this.checkPassword }
    );
  }
  signUp() {
    console.log(this.registerForm.value)
    this.spinner.show();
    return this.registerService.signUp(this.registerForm.value).subscribe(
      res=> {
        this.spinner.hide();
        this.toastr.success('success', 'User Created Successfully.');
      },
      error=> {
        this.spinner.hide();
        this.toastr.error(error.error.message);
      }
    );
  }
  //custom validator will be added to the formgroup and be executed
  checkPassword: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let password = group.get('password')?.value;
    let passwordConfirm = group.get('passwordConfirm')?.value;
    return password === passwordConfirm ? null : { notMatch: true };
  };
}
