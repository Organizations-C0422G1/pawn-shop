import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PawnItemComponent} from "./pawn-item/pawn-item.component";


const routes: Routes = [
  {path: 'pawn-item', component: PawnItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PawnItemListRoutingModule {
}
