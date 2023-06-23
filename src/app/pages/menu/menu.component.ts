import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public pages: number[] = [];
  public titles: string[] = [];
  public descricao: string[] = [];
  public rotas: string[] = [];

  constructor() {
    this.pages = [1, 2, 3];
    this.titles = ['Clima', 'Calculadora', 'Jogo da Velha'];
    this.descricao = ['Digite o nome da cidade e consiga ver detalhes sobre seu clima', '#', '#'];
    this.rotas = ['weather', 'calculator'];
  }

  ngOnInit(): void {

  }

}
