import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TourServiceService } from '../tour-service.service';
import { ToastrService } from 'ngx-toastr';
import { governator } from 'src/app/auth/interfaces/governators';
@Component({
  selector: 'app-where-to-go',
  templateUrl: './where-to-go.component.html',
  styleUrls: ['./where-to-go.component.scss']
})
export class WhereToGoComponent implements OnInit {

  goverantors:governator[] =[];
  constructor(
    private service: TourServiceService,
    private toastr: ToastrService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.getAllGoverantors();
  }
  // i subscribe because the return is observable
  getAllGoverantors(){
    this.service.getAllgovernators().subscribe((res:any)=>{
      this.goverantors = res.data.doc;
    }, error =>{
      this.toastr.error("Failed to get the data.");
      console.log(error)
    });
  }



}
