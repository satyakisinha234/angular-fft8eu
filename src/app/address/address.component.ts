import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() showDiv : boolean=false;
  address1:string;
  address2:string;
  constructor() { }

  ngOnInit() {

  }

}