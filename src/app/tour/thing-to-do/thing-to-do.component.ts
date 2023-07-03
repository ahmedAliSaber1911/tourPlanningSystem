import { Component, OnInit } from '@angular/core';
import { TourServiceService } from '../tour-service.service';
import { ToastrService } from 'ngx-toastr';
import {  tourInterface } from 'src/app/auth/interfaces/tour';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-thing-to-do',
  templateUrl: './thing-to-do.component.html',
  styleUrls: ['./thing-to-do.component.scss']
})
export class ThingToDoComponent implements OnInit {
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
