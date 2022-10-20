import {BrowserModule} from '@angular/platform-browser';

import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Toast, ToastrModule} from 'ngx-toastr';
import {FunctionModule} from './function/function.module';
import {ContractService} from './service/contract.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      progressBar: true,
      preventDuplicates: true
    }),
    FunctionModule
  ],
  providers: [ContractService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
