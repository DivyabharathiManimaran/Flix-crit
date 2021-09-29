import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MDBBootstrapModule, CarouselModule } from 'angular-bootstrap-md';
import { DashboardService } from './dashboard/services/dashboard.service';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    // MatCarouselModule.forRoot()
    CarouselModule,
    MDBBootstrapModule.forRoot() 
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
