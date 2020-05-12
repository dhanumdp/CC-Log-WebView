import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import {Router} from '@angular/router'
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  displayAttendance :boolean;
  displayComplaints : boolean;
  displayMainContent : boolean;
  displayAdmin:boolean;
  localStorageValue;
  loggedIn : boolean;
  username : any;

  constructor(private router : Router, private authService : AuthService) {
    
    
  }
  ngOnInit(): void {
    this.showMainContent();
    this.localStorageValue = localStorage.getItem('user');
    if(this.localStorageValue == null)
    {
      this.loggedIn=false;
    }
    else
    {
      this.loggedIn=true;
      this.username=localStorage.getItem('user').replace(/['"]+/g, '');
    }
    
    this.displayAttendance=false;
    this.displayComplaints=false;
  }

  showMainContent()
  {
    this.displayAttendance=false;
    this.displayComplaints=false;
    this.displayAdmin=false;
    this.displayMainContent=true;
  }

  showAttendance()
  {
    this.displayAttendance=true;
    this.displayComplaints=false;
    this.displayAdmin=false;
    this.displayMainContent=false;
  }
  showComplaints()
  {
    this.displayComplaints=true;
    this.displayAttendance=false;
    this.displayAdmin=false;
    this.displayMainContent=false;
  }
  addAdmin()
  {
    this.displayAttendance=false;
    this.displayComplaints=false;
    this.displayAdmin=true;
    this.displayMainContent=false;
  }
  Logout()
  {

    this.authService.logout();
    this.router.navigate(['/MXCC/Login'])
  }

}
