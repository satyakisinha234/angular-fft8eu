import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() showDiv : boolean;
  @Output() AddressData= new EventEmitter<string>(); 
  address1:string;
  address2:string;
  constructor() { }

  ngOnInit() {

  }

  sendData(){
    this.AddressData.emit(this.address1+this.address2);
  }

}