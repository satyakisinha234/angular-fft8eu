import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';

import { StudentdetailsComponentComponent } from './studentdetails-component/studentdetails-component.component';
import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,RouterModule ],
  declarations: [ AppComponent,StudentdetailsComponentComponent, ReportComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
