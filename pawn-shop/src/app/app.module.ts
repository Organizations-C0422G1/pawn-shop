import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProfitStatisticsModule} from "./profit-statistics/profit-statistics.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {EmployeeInformationModule} from "./employee-information/employee-information.module";
import {environment} from "../environments/environment.prod";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire";
import {NewsModule} from "./news/news.module";
import {LiquidationModule} from "./liquidation/liquidation.module";
import {ToastrModule} from "ngx-toastr";
import {CustomerManagementModule} from "./customer-management/customer-management.module";
import {ReturnItemModule} from "./return-item/return-item.module";
import {EmployeeManagementModule} from "./employee-management/employee-management.module";
import {LayoutModule} from "./layout/layout.module";
import {LoginModule} from "./login/login.module";
import {TransactionModule} from "./transaction/transaction.module";
import {PawnContractModule} from "./pawn-contract/pawn-contract.module";
import {FinanceModule} from "./finance/finance.module";
import {PawnItemListModule} from "./pawn-item-list/pawn-item-list.module";
import {TopTenTransactionModule} from "./top-ten-transaction/top-ten-transaction.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfitStatisticsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EmployeeInformationModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NewsModule,
    LiquidationModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      progressBar: true,
      preventDuplicates: true
    }),
    CustomerManagementModule,
    ReturnItemModule,
    EmployeeManagementModule,
    LayoutModule,
    LoginModule,
    TransactionModule,
    PawnContractModule,
    FinanceModule,
    PawnItemListModule,
    TopTenTransactionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
