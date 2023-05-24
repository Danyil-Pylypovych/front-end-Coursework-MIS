import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainlayoutComponent} from './mainlayout/mainlayout.component';
import {AuthComponent, HomeComponent, RegComponent} from './components';
import {PrivateCabinetComponent} from './components/private-cabinet/private-cabinet.component';
import {DoctorListComponent} from "./components/doctor-list/doctor-list.component";
import {CardListComponent} from "./components/card-list/card-list.component";

const routes: Routes = [
  {
    path: '', component: MainlayoutComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'register', component: RegComponent},
      {path: 'login', component: AuthComponent},
      {
        path: 'cabinet', component: PrivateCabinetComponent, children: [
          {path: 'doctorList/:specialty', component: DoctorListComponent},
          {path: 'cardList', component: CardListComponent},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
