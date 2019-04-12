import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../shared/dataservice.service'
import {Studentmodel} from '../studentdetails-component/studentmodel'
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  details : [];
  constructor(public dataService: DataserviceService) { 
    
  }

  ngOnInit() {
    this.details=this.dataService.get()['details'];
  }

 
  


}