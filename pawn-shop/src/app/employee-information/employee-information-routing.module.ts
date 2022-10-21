import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeInformationComponent} from "./employee-information/employee-information.component";
import {EmployeeUpdateComponent} from "./employee-update/employee-update.component";


const routes: Routes = [
  {path: 'employee-information', component: EmployeeInformationComponent},
  {path: 'employee-update', component: EmployeeUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeInformationRoutingModule { }
