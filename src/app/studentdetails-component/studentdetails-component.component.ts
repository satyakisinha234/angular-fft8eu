import { Component, OnInit } from '@angular/core';
import {Studentmodel} from './studentmodel'
import {DataserviceService} from '../shared/dataservice.service'
import {MessageService} from 'primeng/api';


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
  address ?: string;
  visibiltyFlag:boolean=false;
  parentAdressFlag:boolean=false;
  buttonFlag:boolean=true;
  constructor(public dataService: DataserviceService,private messageService: MessageService ) {
      
  }

  ngOnInit() {    

  }

  addressClick(){
      this.visibiltyFlag=true;
  }
  

  SubmitformData(){
    this.formDetails = new Studentmodel();
    this.formDetails.name = this.name;
    this.formDetails.contact = this.contact;
    this.formDetails.roll_id = this.roll_id;
    this.dataService.set('details',this.formDetails);
    
    //alert(this.formDetails.name);
  }

  receiveChildData($event){
      this.address= $event
      this.parentAdressFlag=true;
      this.buttonFlag=false;
      //alert(this.address);
  }
  addSingle() {
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
    }
  
  
  


}