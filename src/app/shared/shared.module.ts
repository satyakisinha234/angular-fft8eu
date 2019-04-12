import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataserviceService } from './dataservice.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [DataserviceService]
})
export class SharedModule { }