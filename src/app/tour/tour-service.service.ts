import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TourServiceService {
  constructor(private http : HttpClient) { }

  getAllTours(){
    return this.http.get(environment.baseApi + 'tours')
  }
  getTourById(id:any){
    return this.http.get(environment.baseApi + 'tours/' + id )
  }
}
