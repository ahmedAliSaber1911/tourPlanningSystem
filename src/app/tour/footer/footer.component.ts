import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  form!:FormGroup;
  enable:boolean = false;
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      'firstName' : ['',Validators.required],
      'lastName':['',Validators.required],
      'Email':['',Validators.required],
      'message':['',Validators.required],
    })

   }
  ngOnInit(): void {
  }

  submit(){
    if(this.form.valid){
      this.enable = true
      setTimeout(() => {
        this.enable =false
      }, 4000);
    }
  }

}
