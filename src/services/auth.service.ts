import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken;
  user;
  readonly URL="http://localhost:3000/admin"
  constructor(private http:HttpClient) { }


  
  storeUserData(token,user)
  {
    localStorage.setItem('token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token;
    this.user=user;
  }
  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }


  login(user)
  {
    return this.http.post(`${this.URL}`+'/login', user);
  }

}
