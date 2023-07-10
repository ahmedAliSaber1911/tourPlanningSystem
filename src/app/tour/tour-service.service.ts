import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TourInterface } from '../auth/interfaces/tour';

interface Response{
  data: {
    doc: TourInterface[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class TourServiceService {
  constructor(private http : HttpClient) { }

  getAllTours(){
    return this.http.get(environment.baseApi + 'tours').pipe(map((res: Response)=> res.data.doc))
  }
  getTourById(id:any){
    return this.http.get(environment.baseApi + 'tours/' + id )
  }
  getAllgovernators(){
    return this.http.get(environment.baseApi + 'Governor');
  }
  getGovernatorById(id:any){
    return this.http.get(environment.baseApi +'Governor/' + id)
  }
  getAllPackages(){
    return this.http.get(environment.baseApi + 'TravelPackages')
  }
}
