import { Component, OnInit } from '@angular/core';


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