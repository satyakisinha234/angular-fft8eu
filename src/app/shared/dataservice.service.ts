import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';  
import { Observable } from 'rxjs'; 

@Injectable()
export class DataserviceService {

  constructor() { }
  private data = {};  
  
  setOption(option, value) {      
    this.data[option] = value;  
  }  
  
  getOption() {  
    return this.data;  
  }  

}