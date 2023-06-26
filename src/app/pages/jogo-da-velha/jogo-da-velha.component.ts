import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.scss']
})
export class JogoDaVelhaComponent implements OnInit {
public squares: any = []
public player = 'X';
public symbol: string[] = [];
winningValues = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

constructor() {
}

ngOnInit(): void {

}

play(i: number) {
    if (this.squares.length == 8) {
    return console.log('deu velha')
  }
  console.log(this.squares)
    this.squares.push({
      jogada: this.player,
      posicao: i
    });


    const quadrado = document.getElementById(`item-${i}`)
quadrado!.innerHTML = this.player;
this.player = this.player === 'X' ? 'O' : 'X';
// this.checkWin(i)
}

checkWin(jogadaAtual: any) {
  const currentPlay: any = [];
  console.log(currentPlay);
  this.squares.forEach((element: any) => {
    if(element.jogada === jogadaAtual) {
      currentPlay.push(element.posicao)
    }
  })
  if(currentPlay.some(this.winningValues)) {
    console.log('ganhou');
  }
}


}
