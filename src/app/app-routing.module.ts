import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { JogoDaVelhaComponent } from './pages/jogo-da-velha/jogo-da-velha.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    pathMatch: 'full'
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: 'calculator',
    component: CalculadoraComponent
  },
  {
    path: 'tic-tac-toe',
    component: JogoDaVelhaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
