import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TransactionHistoryComponent} from "./transaction-history/transaction-history.component";
import {UpdateContractComponent} from "./update-contract/update-contract.component";


const routes: Routes = [
  {path: 'transaction-history', component: TransactionHistoryComponent},
  {path: 'update-contract', component: UpdateContractComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
