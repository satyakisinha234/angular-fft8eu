import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {StudentdetailsComponentComponent} from '../studentdetails-component/studentdetails-component.component';

const appRoutes: Routes = [
  { path: 'report', component: StudentdetailsComponentComponent },
  { path: 'home', component: StudentdetailsComponentComponent },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],

})

export class AppRoutingModule { }