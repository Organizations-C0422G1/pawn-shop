import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReturnItemComponent} from './return-item/return-item.component';

const routes: Routes = [
  {path: "", component: ReturnItemComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FunctionRoutingModule { }
