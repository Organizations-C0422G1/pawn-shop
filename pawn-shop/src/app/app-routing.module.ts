import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ReturnItemComponent} from './function/return-item/return-item.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
