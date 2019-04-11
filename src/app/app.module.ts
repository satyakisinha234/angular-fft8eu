import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StudentdetailsComponentComponent } from './studentdetails-component/studentdetails-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, StudentdetailsComponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
