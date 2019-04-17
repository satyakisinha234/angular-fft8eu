import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../shared/dataservice.service'
import {Studentmodel} from '../studentdetails-component/studentmodel'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  studentDetails;
  cols;
  displayDialog: boolean;
  newCar: boolean;
  student = {};
  selectedCar = {};
  showData:boolean = false;
  
  constructor(public dataService: DataserviceService) { }

  ngOnInit() {
    this.studentDetails=this.dataService.get();
    this.cols = [
            { field: 'name', header: 'name' },
            { field: 'roll_id', header: 'roll_id' },
            { field: 'contact', header: 'contact' },
            { field: 'address', header: 'address' }
        ];
    // this.studentDetails=[{'name':'satyaki','roll_id':1,'contact':9051770278,'address':'p133 usha park'},
    //                      {'name':'usr1','roll_id':2,'contact':9830883241,'address':'112 /garia'}]
  }
  onRowSelect(event) {
        this.newCar = false;
        this.student = this.cloneCar(event.data);
        this.displayDialog = true;
    }
  showTable() {
        this.showData=true
    }
  cloneCar(c){
        let car = {};
        for (let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
  save() {
        let studentDetails = [...this.studentDetails];
        if (this.newCar)
            studentDetails.push(this.student);
        else
            studentDetails[this.studentDetails.indexOf(this.selectedCar)] = this.student;

        this.studentDetails = studentDetails;
        this.student = null;
        this.displayDialog = false;
        this.dataService.set('update',studentDetails);

    }
  delete() {
        let index = this.studentDetails.indexOf(this.selectedCar);
        this.studentDetails = this.studentDetails.filter((val, i) => i != index);
        this.student = null;
        this.displayDialog = false;
        this.dataService.set('details',this.student);
    }

  

}