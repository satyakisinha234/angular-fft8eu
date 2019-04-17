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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,RouterModule,ToastModule,BrowserAnimationsModule,TableModule,TooltipModule],
  declarations: [ AppComponent,StudentdetailsComponentComponent, ReportComponent, HomeComponent, ModalComponent, AddressComponent, AdminComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataserviceService,MessageService], 
})
export class AppModule { }
