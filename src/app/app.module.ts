import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegComponent } from './components/reg/reg.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CheckFormService } from './check-form.service';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { PrivateCabinetComponent } from './components/private-cabinet/private-cabinet.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import { CardListComponent } from './components/card-list/card-list.component';

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
    CardListComponent
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
  ],
  providers: [CheckFormService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
