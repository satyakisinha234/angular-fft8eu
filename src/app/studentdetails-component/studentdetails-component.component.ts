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

  formData(){
    this.formDetails = new Studentmodel();

  }



}