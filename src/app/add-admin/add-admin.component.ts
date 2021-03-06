import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  form : FormGroup;
  message;
  messageclass;
  constructor(private formBuilder : FormBuilder, private router : Router, private adminService : AdminService ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm()
  {
      this.form = this.formBuilder.group({

        username :['',Validators.compose([Validators.required])],
        password :['',Validators.compose([Validators.required])] 

      })
  }

  addAdmin()
  {
    const user={
      username : this.form.get('username').value,
      password : this.form.get('password').value
    }
    this.adminService.addAdmin(user).subscribe((res)=>{
      if(!res['success'])
      {
        this.messageclass="alert alert-danger"
        this.message=res['message']
      }
      else
      {
        this.messageclass="alert alert-success"
        this.message=res['message'];
        this.form.get('username').disable();
        this.form.get('password').disable();
          
      }
    })
  }

}
