import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopTenTransactionComponent} from "./top-ten-transaction/top-ten-transaction.component";


const routes: Routes = [
  {path: 'top-ten-transaction', component: TopTenTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopTenTransactionRoutingModule { }
