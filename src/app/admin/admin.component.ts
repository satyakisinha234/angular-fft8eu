import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../shared/dataservice.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  studentDetails;
  cols;
  
  constructor(public dataService: DataserviceService) { }

  ngOnInit() {
    this.studentDetails=this.dataService.get();
    this.cols = [
            { field: 'name', header: 'name' },
            { field: 'roll_id', header: 'roll_id' },
            { field: 'contact', header: 'contact' },
            { field: 'address', header: 'address' }
        ];
  }

  

}