import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderportfolioComponent } from './headerportfolio/headerportfolio.component';
import { IniciarComponent } from './componentes/iniciar/iniciar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderportfolioComponent,
    IniciarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
