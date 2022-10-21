import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeManagementComponent} from "./employee-management/employee-management.component";


const routes: Routes = [
  {path: 'employee-management', component: EmployeeManagementComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeManagementRoutingModule { }
