import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LiquidationComponent} from "./liquidation/liquidation.component";


const routes: Routes = [
  {path: 'liquidation', component: LiquidationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiquidationRoutingModule { }
