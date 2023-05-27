import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {
  AuthComponent,
  DashboardComponent,
  FooterComponent,
  HeaderComponent,
  HomeComponent,
  RegComponent,
  PrivateCabinetComponent,
  SideBarComponent,
  SideBarDoctorComponent,
  DoctorListComponent,
  TimetableComponent,
  CardListComponent,
  Error404Component,
} from './components';

import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MainlayoutComponent} from './mainlayout/mainlayout.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import {CreateClientCardModalComponent} from './components';
import {ShowTimeTableComponent} from './components';
import {CreateTimetableModalComponent} from './components';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegComponent,
    AuthComponent,
    DashboardComponent,
    HomeComponent,
    FooterComponent,
    MainlayoutComponent,
    PrivateCabinetComponent,
    SideBarComponent,
    SideBarDoctorComponent,
    DoctorListComponent,
    TimetableComponent,
    CardListComponent,
    Error404Component,
    ShowTimeTableComponent,
    CreateTimetableModalComponent,
    CreateClientCardModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
