import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {StudentdetailsComponentComponent} from '../studentdetails-component/studentdetails-component.component';
import {ReportComponent} from '../report/report.component';

const appRoutes: Routes = [ 
  { path: 'student', component: StudentdetailsComponentComponent },
  { path: 'report', component: ReportComponent },  
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