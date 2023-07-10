import { Component, OnInit } from '@angular/core';
import { TourServiceService } from '../tour-service.service';
import { governator } from 'src/app/auth/interfaces/governators';
import { tourPackages } from 'src/app/auth/interfaces/package';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {
  governators:governator[] = [];
  packages:tourPackages[]

  constructor(
    private service: TourServiceService
  ) { }

  ngOnInit(): void {
    this.getAllGovernators();
    this.getAllPackages()
  }
  getAllGovernators(){
    this.service.getAllgovernators().subscribe((res:any)=>{
      this.governators = res.data.doc;
      console.log(this.governators)
    },error=>{
      console.log(error);
    })
  }
  getAllPackages(){
    this.service.getAllPackages().subscribe((res:any)=>{
      this.packages = res.data.doc
    })
  }
}
