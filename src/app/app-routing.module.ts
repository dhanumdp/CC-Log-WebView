import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path:'', 
    redirectTo:'/MXCC/Login',
    pathMatch:'full'
  },
  {
    path:'MXCC/Login',
    component:LoginComponent
  },
  {
    path:'MXCC/Home',
    component:MainComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
