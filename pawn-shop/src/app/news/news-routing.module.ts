import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsAddComponent} from "./news-add/news-add.component";
import {NewsListComponent} from "./news-list/news-list.component";
import {CustomerAddComponent} from "../customer-management/customer-add/customer-add.component";
import {CheckCanActiveService} from "../service/check-can-active.service";


const routes: Routes = [
  {path: 'news-add', component: NewsAddComponent, canActivate: [CheckCanActiveService]},
  {path: 'news-list', component: NewsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
