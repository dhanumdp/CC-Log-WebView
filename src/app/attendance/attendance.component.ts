import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common'
import { AttendanceService } from '../../services/attendance.service'
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
  providers:[DatePipe]
})
export class AttendanceComponent implements OnInit {

  selectedDate : String;
  message;
  messageclass;
  constructor(private datepipe : DatePipe, public attendanceService : AttendanceService) { }

  ngOnInit(): void {
  }

  print()
  {
    console.log('Selected Date '+this.datepipe.transform(this.selectedDate, 'dd/MM/yyyy'))
   let date ={
     date : this.datepipe.transform(this.selectedDate, 'dd/MM/yyyy')
   }
   this.attendanceService.getList(date).subscribe((res)=>{
     if(res['success'])
     {
      this.attendanceService.attendanceList=res['data'];
       
     }
     else
     {
      this.attendanceService.attendanceList=[]; 
      this.messageclass='alert alert-danger'
        this.message=res['message']
     }  
    
   })
  }
}
