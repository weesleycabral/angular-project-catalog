import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { JogoDaVelhaComponent } from './pages/jogo-da-velha/jogo-da-velha.component';
import { HeaderComponent } from './pages/menu/header/header.component';
import { FooterComponent } from './pages/menu/footer/footer.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UrlShortenerComponent } from './pages/url-shortener/url-shortener.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CalculadoraComponent,
    JogoDaVelhaComponent,
    HeaderComponent,
    FooterComponent,
    WeatherComponent,
    UrlShortenerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
