import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopTenTransactionComponent} from './function/store-information/top-ten-transaction/top-ten-transaction.component';
import {UpdateContractComponent} from './function/store-information/transaction-history/update-contract/update-contract.component';
import {PawnContractAddComponent} from './function/pawn-contract/pawn-contract-add/pawn-contract-add.component';


const routes: Routes = [
  {path: 'top10-contract', component : TopTenTransactionComponent},
  {path: 'update-contract/:id', component : UpdateContractComponent},
  {path: 'contract', component: PawnContractAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
