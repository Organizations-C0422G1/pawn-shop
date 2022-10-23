import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsAddComponent} from "./news-add/news-add.component";
import {NewsListComponent} from "./news-list/news-list.component";


const routes: Routes = [
  {path: 'news-add', component: NewsAddComponent},
  {path: 'news-list', component: NewsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
