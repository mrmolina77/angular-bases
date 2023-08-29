import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ContadorModules } from './contador/contador.module';

import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    ContadorModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
