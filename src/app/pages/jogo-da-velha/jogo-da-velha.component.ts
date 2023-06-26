import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.scss'],
})
export class JogoDaVelhaComponent implements OnInit {
  public squares: any = [];
  public player = 'X';
  public symbol: string[] = [];
  public winningValues = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  constructor() {}

  ngOnInit(): void {}

  play(i: number) {
    if (this.squares.length >= 9) {
      this.reset();
    }
    console.log(this.squares);
    this.squares.push({
      jogada: this.player,
      posicao: i,
    });

    const quadrado = document.getElementById(`item-${i}`);
    quadrado!.innerHTML = this.player;
    this.player = this.player === 'X' ? 'O' : 'X';
    // this.checkWin(this.player);
  }

  checkWin(jogadaAtual: any) {
    const currentPlay: any = [];
    console.log(currentPlay);
    this.squares.forEach((element: any) => {
      if (element.jogada === jogadaAtual) {
        currentPlay.push(element.posicao);
      }
    });
    if (currentPlay.some(this.winningValues)) {
      console.log('ganhou');
    }
  }

  reset() {
    this.squares = [];
    this.player = '';
    for (let index = 1; index < 10; index++) {
      const quadrado = document.getElementById(`item-${index}`);
      quadrado!.innerHTML = '';
      // document.getElementById(`item-${index}`).innerHTML = '';
    }
  }
}
