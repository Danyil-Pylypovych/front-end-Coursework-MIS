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
import {PrivateCabinetComponent} from './components/private-cabinet/private-cabinet.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import {DoctorListComponent} from './components/doctor-list/doctor-list.component';
import {TimetableComponent} from './components/timetable/timetable.component';
import {CardListComponent} from './components/card-list/card-list.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { Error404Component } from './components/error404/error404.component';

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
    DoctorListComponent,
    TimetableComponent,
    CardListComponent,
    Error404Component
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
  ],
  providers: [CheckFormService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
