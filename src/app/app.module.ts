import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { JogoDaVelhaComponent } from './pages/jogo-da-velha/jogo-da-velha.component';
import { HeaderComponent } from './pages/menu/header/header.component';
import { FooterComponent } from './pages/menu/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CalculadoraComponent,
    JogoDaVelhaComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
