import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { DataserviceService } from './shared/dataservice.service';
import { StudentdetailsComponentComponent } from './studentdetails-component/studentdetails-component.component';
import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { AddressComponent } from './address/address.component';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,RouterModule,ToastModule ],
  declarations: [ AppComponent,StudentdetailsComponentComponent, ReportComponent, HomeComponent, ModalComponent, AddressComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataserviceService,MessageService], 
})
export class AppModule { }
