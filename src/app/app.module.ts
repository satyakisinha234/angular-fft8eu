import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StudentdetailsComponentComponent } from './studentdetails-component/studentdetails-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,RouterModule ],
  declarations: [ AppComponent, HelloComponent, StudentdetailsComponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
