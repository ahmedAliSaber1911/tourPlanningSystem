import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TourServiceService } from '../tour-service.service';
import { ToastrService } from 'ngx-toastr';
import {  tourInterface } from 'src/app/auth/interfaces/tour';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-governorate',
  templateUrl: './governorate.component.html',
  styleUrls: ['./governorate.component.scss']
})
export class GovernorateComponent implements OnInit {
  governorateId =this.route.snapshot.paramMap.get('id');
  tour:tourInterface;
  constructor(
    private service: TourServiceService,
    private toastr:ToastrService,
    private route :ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getTour()
  }
  getTour(){
    this.service.getTourById(this.governorateId).subscribe((res:any)=>{
      this.tour = res;
      console.log(this.tour)
    },error =>{
      this.toastr.error("Fail to get the data.")
    });
  }


}
