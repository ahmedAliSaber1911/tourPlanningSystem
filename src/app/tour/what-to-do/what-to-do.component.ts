import { Component, OnInit } from '@angular/core';
import { TourServiceService } from '../tour-service.service';
import { tourInterface } from 'src/app/auth/interfaces/tour';

@Component({
  selector: 'app-what-to-do',
  templateUrl: './what-to-do.component.html',
  styleUrls: ['./what-to-do.component.scss']
})
export class WhatToDoComponent implements OnInit {
  thingsToDo:tourInterface[] = [];
  constructor(
    private service: TourServiceService
  ) { }

  ngOnInit(): void {
    this.getAllThings()
  }
  getAllThings(){
    this.service.getAllTours().subscribe((res:any)=>{
      this.thingsToDo = res.data.doc;
      console.log(this.thingsToDo)
    },error=>{
      console.log(error)
    })
  }
}
