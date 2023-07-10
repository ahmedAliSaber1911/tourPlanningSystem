import { Component, OnInit } from '@angular/core';
import { TourServiceService } from '../tour-service.service';
import { ToastrService } from 'ngx-toastr';
import {  TourInterface } from 'src/app/auth/interfaces/tour';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-thing-to-do',
  templateUrl: './thing-to-do.component.html',
  styleUrls: ['./thing-to-do.component.scss']
})
export class ThingToDoComponent implements OnInit {
  governorateId =this.route.snapshot.paramMap.get('id');
  tours:TourInterface[];
  constructor(
    private service: TourServiceService,
    private toastr:ToastrService,
    private route :ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getTours()
  }
  getTours(){
    this.service.getAllTours().subscribe((res:TourInterface[])=>{
      this.tours = res.filter(tour=>tour.title?.includes("the sun and sea"));
      console.log(this.tours)
    },error =>{
      this.toastr.error("Fail to get the data.")
    });
  }

}
