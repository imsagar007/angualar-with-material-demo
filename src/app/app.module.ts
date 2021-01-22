import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import{ProductsService} from './products.service';
import { HomeComponent } from './home/home.component';
import {MaterialModule} from './material/material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TraningComponent } from './traning/traning.component';
import { CurrentTraningComponent } from './traning/current-traning/current-traning.component';
import { NewTraningComponent } from './traning/new-traning/new-traning.component';
import { PastTraningComponent } from './traning/past-traning/past-traning.component'
import {FlexLayoutModule} from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component'
import { StopTraningComponent } from './traning/current-traning/stop-traning.component';
import {AuthService} from './auth/auth.service';
import { TraningService } from './traning/traning.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    TraningComponent,
    CurrentTraningComponent,
    NewTraningComponent,
    PastTraningComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTraningComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,

  ],
  providers: [AuthService,TraningService],
  bootstrap: [AppComponent],
  entryComponents: [StopTraningComponent]
})
export class AppModule { }
