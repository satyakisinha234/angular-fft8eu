import { Component, OnInit, Input } from '@angular/core';
import {Studentmodel} from '../studentdetails-component/studentmodel'
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() Formobject: Studentmodel;
  constructor() { }

  ngOnInit() {
  }
  

}