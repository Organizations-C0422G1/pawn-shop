import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompleteContractComponent} from "./complete-contract/complete-contract.component";
import {ExpectedContractComponent} from "./expected-contract/expected-contract.component";
import {CommonModule} from "@angular/common";
import {LiquidationContractComponent} from "./liquidation-contract/liquidation-contract.component";

const routes: Routes = [
  {path: 'complete-contract', component: CompleteContractComponent},
  {path: 'expected-contract', component: ExpectedContractComponent},
  {path: 'liquidation-contract', component: LiquidationContractComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfitStatisticsRoutingModule {
}
