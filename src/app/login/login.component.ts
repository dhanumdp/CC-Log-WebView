import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router'
import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : FormGroup;
  message;
  messageclass;
  constructor( private formBuilder : FormBuilder, private authService : AuthService, private router : Router ) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm()
  {
    this.form = this.formBuilder.group({
  
      username: ['', Validators.compose([
        Validators.required,
       
      ])],
      password: ['', Validators.compose([
        Validators.required
   
      ])]
    })
  }


  onFormSubmit()
  {
    const user={
      username:this.form.get('username').value,
      password:this.form.get('password').value
    } 
    this.authService.login(user).subscribe((res)=>{

        this.authService.storeUserData(res['token'],res['user']);
        // console.log(res);  
        // console.log(localStorage.getItem('user'))
        if(!res['success'])
        {
          this.messageclass="alert alert-danger"
          this.message=res['message'];
        }
        else
        {
            this.router.navigate(['/MXCC/Home'])
        }
    })
  }

}
