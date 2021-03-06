import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Complaints} from '../models/complaints'

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {

  complaints : Complaints[]
  complaing : Complaints;

  readonly URL="http://localhost:3000/admin"
  constructor(private http:HttpClient) { }


  getList()
  {
    return this.http.get(`${this.URL}`+'/getComplaintList');
  }

  updateComplaint(id)
  {
      return this.http.get(`${this.URL}`+'/updateComplaint/'+`${id}`);
  }
  
  deleteComplaint(id)
  { 
    return this.http.get(`${this.URL}`+'/deleteComplaint/'+`${id}`);
  }

}
