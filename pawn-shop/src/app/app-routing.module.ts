import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LiquidationComponent} from "./function/liquidation/liquidation.component";


const routes: Routes = [
  // {path :"/liquidation",component:LiquidationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
