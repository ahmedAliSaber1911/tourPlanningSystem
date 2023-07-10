import { governator } from 'src/app/auth/interfaces/governators';
import { Component, OnInit } from '@angular/core';
import { TourServiceService } from '../tour-service.service';
import { ToastrService } from 'ngx-toastr';
import {  TourInterface } from 'src/app/auth/interfaces/tour';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-governorate',
  templateUrl: './governorate.component.html',
  styleUrls: ['./governorate.component.scss']
})
export class GovernorateComponent implements OnInit {
  governorateId =this.route.snapshot.paramMap.get('id');
  filterText =this.route.snapshot.queryParamMap.get('tour')?.trim()?.toLowerCase();

  governator:governator;
  tours:TourInterface[];

  constructor(
    private service: TourServiceService,
    private toastr:ToastrService,
    private route :ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getGovernator();
    this.getTours()
  }
  getGovernator(){
    this.service.getGovernatorById(this.governorateId).subscribe((res:any)=>{
      this.governator = res;
      console.log(this.governator)
    },error =>{
      this.toastr.error("Fail to get the data.")
    });
  console.log(this.governorateId);
  }

  getTours(){
    this.service.getAllTours().subscribe((res:TourInterface[])=>{
      // console.log(res,' tours ')
      // console.log(res.filter(r=> r.governor),' tours ')

      this.tours = res.filter(tour=> tour.governor?.toLowerCase().includes(this.filterText ) || this.filterText.includes(tour.governor?.toLowerCase()))

    },error =>{
      this.toastr.error("Fail to get the data.")
    });


  console.log(this.governorateId);
  }

}
