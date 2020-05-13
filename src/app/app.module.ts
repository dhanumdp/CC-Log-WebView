import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { LoginComponent } from './login/login.component';
import {DatePipe} from '@angular/common'
import { MainComponent } from './main/main.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  
    MainComponent,
    AttendanceComponent,
    ComplaintsComponent,
    AddAdminComponent,
    MainContentComponent,
    ChangepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
