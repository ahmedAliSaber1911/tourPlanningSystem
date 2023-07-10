import { Component, OnInit } from '@angular/core';
import { TourServiceService } from '../tour-service.service';
import { tourPackages } from 'src/app/auth/interfaces/package';

@Component({
  selector: 'app-tour-packages',
  templateUrl: './tour-packages.component.html',
  styleUrls: ['./tour-packages.component.scss']
})
export class TourPackagesComponent implements OnInit {
  packages:tourPackages[]
  constructor(
    private service: TourServiceService
  ){

  }

  ngOnInit(): void {
    this.getAllPackages()
  }
  getAllPackages(){
    this.service.getAllPackages().subscribe((res:any)=>{
      this.packages = res.data.doc
    })
  }
}
