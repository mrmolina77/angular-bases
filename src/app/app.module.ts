import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ContadorModules } from './contador/contador.module';

import { AppComponent } from './app.component';
import { ListComponent } from './heroes/list/list.component';
import { HeroComponent } from './heroes/components/hero/hero.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ListComponent,

  ],
  imports: [
    BrowserModule,
    ContadorModules,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
