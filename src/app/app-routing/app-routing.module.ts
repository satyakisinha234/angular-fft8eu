import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {StudentdetailsComponentComponent} from '../studentdetails-component/studentdetails-component.component';
import {ReportComponent} from '../report/report.component';
import {HomeComponent} from '../home/home.component'
import {AdminComponent} from '../admin/admin.component'

const appRoutes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: 'student', component: StudentdetailsComponentComponent },
  { path: 'report', component: ReportComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: '/home' }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],

})

export class AppRoutingModule { }