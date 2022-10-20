import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeeInformationComponent} from './function/employee-information/employee-information.component';
// tslint:disable-next-line:max-line-length
import {EmployeeUpdateInformationComponent} from './function/employee-information/employee-update-information/employee-update-information.component';
import {NewsCreateComponent} from './function/news/news-create/news-create.component';


const routes: Routes = [
  {path: 'employee/details', component: EmployeeInformationComponent},
  {path: 'employee/update/:user', component: EmployeeUpdateInformationComponent},
  {path: 'news/create', component: NewsCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
