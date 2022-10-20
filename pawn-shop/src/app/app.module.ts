import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Toast, ToastrModule} from "ngx-toastr";
import {HttpClientModule} from '@angular/common/http';
import {FunctionModule} from './function/function.module';
import {UpdateContractComponent} from './function/store-information/transaction-history/update-contract/update-contract.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment.prod';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    UpdateContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      progressBar: true,
      preventDuplicates: true
    }),
    HttpClientModule,
    FunctionModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
