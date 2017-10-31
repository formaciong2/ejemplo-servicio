import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DemoService } from './demo.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
