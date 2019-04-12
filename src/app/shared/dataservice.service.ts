import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';  
import { Observable } from 'rxjs'; 

@Injectable()
export class DataserviceService {

  constructor() { }
  private data = {};  
  
  set(option, value) {      
    this.data[option] = value;  
  }  
  
  get() {  
    return this.data;  
  }  

}