import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsAddComponent} from "./news-add/news-add.component";
import {NewsListComponent} from "./news-list/news-list.component";


const routes: Routes = [
  {path: 'new-add', component: NewsAddComponent},
  {path: 'new-list', component: NewsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
