import { DashboardComponent } from './dashboard/dashboard.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AddressComponent } from './address/address.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    HomeComponent,
    SignupComponent,
    AddressComponent,
    Navbar2Component,
    DashboardComponent,
    AdminComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule
    
  ],
  providers: [Navbar2Component],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
