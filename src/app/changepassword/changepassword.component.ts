import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  form : FormGroup;
  message;
  messageclass;
  constructor(private formBuilder : FormBuilder, private router : Router, private adminService : AdminService ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm()
  {
    this.form=this.formBuilder.group({
      password :['',Validators.compose([Validators.required])] 
    })
  }
  changePassword()
  {
    const user ={
      username : localStorage.getItem('user').replace(/['"]+/g, ''),
      password:this.form.get('password').value
    }

    this.adminService.changePassword(user).subscribe((res)=>{
      if(!res['success'])
      {
        this.messageclass="alert alert-danger"
        this.message=res['message']
      }
      else
      {
        this.messageclass="alert alert-success"
        this.message=res['message'];
        this.form.get('password').setValue("");
          
      }
    })
  }
}
