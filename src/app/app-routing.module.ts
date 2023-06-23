import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
