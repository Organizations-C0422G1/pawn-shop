import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContractAddComponent} from "./contract-add/contract-add.component";


const routes: Routes = [
  {path: 'contract-add', component: ContractAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PawnContractRoutingModule { }
