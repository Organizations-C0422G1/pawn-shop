import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerAddComponent} from "./customer-add/customer-add.component";
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {CustomerUpdateComponent} from "./customer-update/customer-update.component";


const routes: Routes = [
  {path: 'customer-add', component: CustomerAddComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-update/:user', component: CustomerUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerManagementRoutingModule { }
