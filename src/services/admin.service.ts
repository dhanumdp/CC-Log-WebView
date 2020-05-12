import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  readonly URL="http://localhost:3000/admin"
  constructor(private http:HttpClient) { }


  addAdmin(user)
  {
    return this.http.post(`${this.URL}`+'/addAdmin',user);
  }

  changePassword(user)
  {
    return this.http.post(`${this.URL}`+'/changePassword',user);
  }

}
