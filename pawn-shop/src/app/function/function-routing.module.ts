import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReturnItemComponent} from './return-item/return-item.component';


const routes: Routes = [
  {
    path: '',
    component: ReturnItemComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunctionRoutingModule {
}
