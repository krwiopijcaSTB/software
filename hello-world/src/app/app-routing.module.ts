import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardListComponent} from "./dashboard-list/dashboard-list.component";
import {LoginListComponent} from "./login-list/login-list.component";


const routes: Routes = [
  {path: 'dashboard', component: DashboardListComponent},
  {path: 'login', component: LoginListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardListComponent, LoginListComponent]
