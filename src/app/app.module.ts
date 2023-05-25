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
} from './components';

import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CheckFormService} from './check-form.service';
import {HttpClientModule} from '@angular/common/http';
import {MainlayoutComponent} from './mainlayout/mainlayout.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import {PrivateCabinetComponent} from './components';
import {SideBarComponent} from './components';
import {SideBarDoctorComponent} from './components';
import {DoctorListComponent} from './components';
import {TimetableComponent} from './components';
import {CardListComponent} from './components';
import { Error404Component } from './components';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { ShowTimeTableComponent } from './components';
import { CreateTimetableModalComponent } from './components/create-timetable-modal/create-timetable-modal.component';
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import { CreateClientCardModalComponent } from './components/create-client-card-modal/create-client-card-modal.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";

const appRoute: Routes = [
  {path: '', component: HomeComponent},
  {path: 'reg', component: RegComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'dashboard', component: DashboardComponent}
]

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
    RouterModule.forRoot(appRoute),
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
  providers: [CheckFormService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
