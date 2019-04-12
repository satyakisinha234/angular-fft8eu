import { Component, OnInit } from '@angular/core';
import {Studentmodel} from './Studentmodel'


@Component({
  selector: 'app-studentdetails-component',
  templateUrl: './studentdetails-component.component.html',
  styleUrls: ['./studentdetails-component.component.css']
})
export class StudentdetailsComponentComponent implements OnInit {

  name: string;
  roll_id: number;
  contact: number;

  constructor() { }

  ngOnInit() {    

  }



}