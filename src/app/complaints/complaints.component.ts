import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from 'src/services/complaints.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {

  constructor(public complaintService : ComplaintsService) { }

  ngOnInit(): void {
    this.getComplaints();
  }

  getComplaints()
  {
    this.complaintService.getList().subscribe((res)=>{
      // console.log(res['data']);
      this.complaintService.complaints=res['data'];
    })
  }

  checkOutComplaint(id)
  {
      this.complaintService.updateComplaint(id).subscribe((res)=>{
        console.log(res);
        this.getComplaints();
      })
  }

  deleteComplaint(id)
  {
    if(confirm("Are You Sure Want to Delete ?"))
    {
      this.complaintService.deleteComplaint(id).subscribe((res)=>{
          this.getComplaints()
      })
    }
    else
    {
      this.getComplaints();
    }
    
  }
}
