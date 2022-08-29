import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxAdDfpModule} from '../../projects/ngx-ad-dfp/src/lib/ngx-ad-dfp.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAdDfpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
