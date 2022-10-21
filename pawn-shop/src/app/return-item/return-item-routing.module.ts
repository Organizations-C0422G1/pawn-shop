import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReturnItemComponent} from "./return-item/return-item.component";


const routes: Routes = [
  {path: 'return-item', component: ReturnItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnItemRoutingModule { }
