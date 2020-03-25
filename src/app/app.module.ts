import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material-module/material.module'
import { DefaultModule } from './layouts/default/default.module'
import { TranslocoRootModule } from './transloco-root.module'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { MAT_DATE_LOCALE } from '@angular/material/core'
import { JwtInterceptor } from './helpers/jwt.interceptor'
import { Platform } from '@angular/cdk/platform'
import { NgxSpinnerModule } from 'ngx-spinner'

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    TranslocoRootModule,
    BrowserAnimationsModule,
    MaterialModule,
    DefaultModule,
    NgxSpinnerModule,
  ],
  providers: [
    Platform,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
