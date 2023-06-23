import { Component, OnInit } from '@angular/core';
import { Card } from './models/card.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  // public pages: number[] = [];
  // public titles: string[] = [];
  // public descricao: string[] = [];
  // public rotas: string[] = [];
  public cards: Card[] = [];

  constructor() {
    this.cards = [
      {
        name: 'Clima',
        description: 'Digite o nome da cidade e consiga ver detalhes sobre seu clima',
        route: 'weather',
        available: true
      },
      {
        name: 'Calculadora',
        description: 'Faça cálculos que nem uma calculadora normal',
        route: 'calculator',
        available: true
      },
      {
        name: 'Jogo da Velha',
        description: 'Jogue um jogo da velha virtual',
        route: '',
        available: false
      },

    ]

    // this.pages = [1, 2, 3];
    // this.titles = ['Clima', 'Calculadora', 'Jogo da Velha'];
    // this.descricao = ['Digite o nome da cidade e consiga ver detalhes sobre seu clima',
    //   'Faça cálculos que nem uma calculadora normal',
    //   '#'
    // ];
    // this.rotas = ['weather', 'calculator'];
  }

  ngOnInit(): void {

  }

}
