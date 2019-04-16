import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() showDiv : boolean;
  @Output() AddressData= new EventEmitter<string>(); 
  address1:string;
  address2 ?:string;
  constructor(private messageService: MessageService) { }

  ngOnInit() {

  }

  sendData(){
    //alert(this.address1+this.address2);
    if(this.address2==undefined){
      this.address2='';
    }
    this.AddressData.emit(this.address1+ ' ' + this.address2);
    this.showDiv=false;
    this.messageService.add({severity:'success', summary:'Info', detail:'Address Added Successfully'});
  }

}