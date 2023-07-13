import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.scss'],
})
export class JogoDaVelhaComponent implements OnInit {
  public squares: any = [];
  public player = 'X';
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

  public jogadasX: number[] = [];
  public jogadasO: number[] = [];

  public winner = '';

  constructor() {}

  ngOnInit(): void {}

  play(i: number) {
    if (this.winner) {
      return;
    }

    if (this.squares.length >= 9) {
      this.reset();
    }

    this.squares.push({
      jogada: this.player,
      posicao: i,
    });

    const quadrado = document.getElementById(`item-${i}`);
    quadrado!.innerHTML = this.player;

    this.player === 'X' ? this.jogadasX.push(i) : this.jogadasO.push(i);

    this.checkWin(this.player);
    this.player = this.player === 'X' ? 'O' : 'X';
    // const div = document.getElementsByClassName('item');
    // if (this.player === 'X') {

    // }

    // this.checkWin(this.player);
  }

  checkWin(jogadorAtual: any) {
    if (jogadorAtual) {
      const currentPlayer: any = `jogadas` + jogadorAtual;
      let count = 0;

      (this as any)[currentPlayer].forEach(() => {
        this.winningValues.forEach((winningvalue) => {
          winningvalue.forEach((value) => {
            if ((this as any)[currentPlayer].includes(value)) {
              count++;
            }
          });

          if (count === 3 && !this.winner) {
            this.winner = jogadorAtual;
            return;
          }

          count = 0;
        });
      });
    }
  }

  reset() {
    this.winner = '';
    this.squares = [];
    this.jogadasX = [];
    this.jogadasO = [];
    this.player = '';

    for (let index = 1; index < 10; index++) {
      const quadrado = document.getElementById(`item-${index}`);
      quadrado!.innerHTML = '';
      // document.getElementById(`item-${index}`).innerHTML = '';
    }
  }
}
