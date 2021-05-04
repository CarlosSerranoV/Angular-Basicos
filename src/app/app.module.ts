import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/Heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent
  ],//hola
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
