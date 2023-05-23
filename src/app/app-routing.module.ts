import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { AuthComponent, HomeComponent, RegComponent } from './components';
import { PrivateCabinetComponent } from './components/private-cabinet/private-cabinet.component';

const routes: Routes = [
  {path: '', component: MainlayoutComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'register', component: RegComponent},
    {path: 'login', component: AuthComponent},
    {path: 'cabinet', component: PrivateCabinetComponent, children: [
      
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
