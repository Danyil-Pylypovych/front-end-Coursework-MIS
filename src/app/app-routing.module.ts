import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainlayoutComponent} from './mainlayout/mainlayout.component';
import {AuthComponent, HomeComponent, RegComponent} from './components';
import {PrivateCabinetComponent} from './components/private-cabinet/private-cabinet.component';
import {DoctorListComponent} from "./components/doctor-list/doctor-list.component";
import {CardListComponent} from "./components/card-list/card-list.component";
import {AuthGuard} from "./guards";
import {UserResolver} from "./servises/resolvers";
import {Error404Component} from "./components/error404/error404.component";

const routes: Routes = [
  {
    path: '', component: MainlayoutComponent, children: [
      {path: '', redirectTo: 'index', pathMatch: 'full'},
      {path: 'index', component: HomeComponent},
      {path: 'register', component: RegComponent},
      {path: 'login', component: AuthComponent},
      {
        path: 'cabinet',
        canActivate: [AuthGuard],
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        resolve: {data: UserResolver},
        component: PrivateCabinetComponent,
        children: [
          {path: 'home', component: HomeComponent},
          {path: 'doctorList/:specialty', component: DoctorListComponent},
          {path: 'cardList', component: CardListComponent},
        ]
      },
      {path: '**', redirectTo: 'error404', title: '404', data: {error: 404}},
      {path: 'error404', data: {error: 404}, component: Error404Component}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
