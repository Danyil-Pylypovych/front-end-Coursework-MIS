import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainlayoutComponent} from './mainlayout/mainlayout.component';
import {AuthComponent, HomeComponent, RegComponent, ShowTimeTableComponent} from './components';
import {PrivateCabinetComponent} from './components';
import {DoctorListComponent} from "./components";
import {CardListComponent} from "./components";
import {AuthGuard} from "./guards";
import {UserResolver} from "./servises/resolvers";
import {Error404Component} from "./components";

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
          {path: 'doctorTimetable', component: ShowTimeTableComponent},
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
