import { Component, OnInit } from '@angular/core';
import {Studentmodel} from './studentmodel'


@Component({
  selector: 'app-studentdetails-component',
  templateUrl: './studentdetails-component.component.html',
  styleUrls: ['./studentdetails-component.component.css']
})
export class StudentdetailsComponentComponent implements OnInit {

  public formDetails: Studentmodel; 
  name: string;
  roll_id: number;
  contact: number;

  constructor() { }

  ngOnInit() {    

  }

  SubmitformData(){
    this.formDetails = new Studentmodel();
    this.formDetails.name = this.name;
    this.formDetails.contact = this.contact;
    this.formDetails.roll_id = this.roll_id;
    alert(this.formDetails.name);
  }



}