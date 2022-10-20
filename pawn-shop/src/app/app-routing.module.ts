import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PawnContractAddComponent} from "./function/pawn-contract/pawn-contract-add/pawn-contract-add.component";


const routes: Routes = [
  {path: 'contract', component: PawnContractAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
