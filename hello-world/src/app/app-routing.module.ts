import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginListComponent} from "./login-list/login-list.component";
import {AccountsListComponent} from "./accounts-list/accounts-list.component";
import {CustomersListComponent} from "./customers-list/customers-list.component";



const routes: Routes = [
  {path: 'login', component: LoginListComponent},
  {path: 'accounts', component: AccountsListComponent},
  {path: 'customers', component: CustomersListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginListComponent, AccountsListComponent, CustomersListComponent]
