import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TourServiceService } from '../tour-service.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { tourInterface } from 'src/app/auth/interfaces/tour';
@Component({
  selector: 'app-where-to-go',
  templateUrl: './where-to-go.component.html',
  styleUrls: ['./where-to-go.component.scss']
})
export class WhereToGoComponent implements OnInit {

  tourData:tourInterface[] =[];
  constructor(
    private service: TourServiceService,
    private toastr: ToastrService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.getAllTours()
  }
  // i subscribe because the return is observable
  getAllTours(){
    this.service.getAllTours().subscribe((res:any)=>{
      this.tourData = res.data.doc
    }, error =>{
      this.toastr.error("Failed to get the data.");
    });
  }

}
