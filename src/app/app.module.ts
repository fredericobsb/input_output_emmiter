import { BrowserModule } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaiComponent } from './pai/pai.component';
import { FilhoComponent } from './filho/filho.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { Filho2Component } from './filho2/filho2.component';

@NgModule({
  declarations: [
    AppComponent,
    PaiComponent,
    FilhoComponent,
    Filho2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
