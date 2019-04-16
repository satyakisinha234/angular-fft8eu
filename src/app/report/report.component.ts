import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../shared/dataservice.service'
import {Studentmodel} from '../studentdetails-component/studentmodel'
import {TableModule} from 'primeng/table';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  details : [];
  studentDetails;
  constructor(public dataService: DataserviceService) { 
    
  }

  ngOnInit() {
    // this.details.push(this.dataService.get());
    this.studentDetails=this.dataService.get();
    //this.studentDetails=this.dataService.get();
    //alert(this.dataService.get()[0]);
  }

 
  


}