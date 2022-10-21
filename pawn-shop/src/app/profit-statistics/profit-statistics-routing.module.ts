import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompleteContractComponent} from "./complete-contract/complete-contract.component";
import {ExpectedContractComponent} from "./expected-contract/expected-contract.component";
import {LiquidationComponent} from "../liquidation/liquidation/liquidation.component";

const routes: Routes = [
  {path: 'complete-contract', component: CompleteContractComponent},
  {path: 'expected-contract', component: ExpectedContractComponent},
  {path: 'liquidation-contract', component: LiquidationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfitStatisticsRoutingModule { }
