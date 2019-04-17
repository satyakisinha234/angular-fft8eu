import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';  
import { Observable } from 'rxjs'; 

@Injectable(
)
export class DataserviceService {

  constructor() { }
  private data=[];  
  
  set(option, value) { 
    if(option=="update")
    { 
      this.data =value; 
    } 
    else{
      this.data.push(value); 
    }
  }  
  
  get() {  
    return this.data;  
  }  

}