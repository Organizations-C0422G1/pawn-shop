import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfitStatisticsRoutingModule } from './profit-statistics-routing.module';
import { CompleteContractComponent } from './complete-contract/complete-contract.component';
import { LiquidationContractComponent } from './liquidation-contract/liquidation-contract.component';
import { ExpectedContractComponent } from './expected-contract/expected-contract.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [CompleteContractComponent, LiquidationContractComponent, ExpectedContractComponent],
  exports: [
    CompleteContractComponent,
    ExpectedContractComponent,
    LiquidationContractComponent
  ],
  imports: [
    CommonModule,
    ProfitStatisticsRoutingModule,
    FormsModule
  ]
})
export class ProfitStatisticsModule { }
