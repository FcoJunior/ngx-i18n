import { NgxI18nModule } from './../../projects/ngx-i18n/src/lib/ngx-i18n.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxI18nModule.forRoot({
      directory: 'assets/i18n', 
      defaultLocale: 'pt-BR', 
      locale: navigator.language
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
