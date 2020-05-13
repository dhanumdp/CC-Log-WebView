import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Attendance} from '../models/attendance'

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  attendanceList : Attendance[]

  readonly URL="http://localhost:3000/admin"
  constructor(private http:HttpClient) { }


  getList(date)
  {
    return this.http.post(`${this.URL}`+'/getAttendanceList',date);
  }
}
