import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Toast, ToastrModule} from "ngx-toastr";
import {HttpClientModule} from '@angular/common/http';
import {LoginModule} from './login/login.module';
import {TokenStorageService} from './service/token-storage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    ToastrModule.forRoot({
      timeOut:2500,
      progressBar:true,
      preventDuplicates:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
