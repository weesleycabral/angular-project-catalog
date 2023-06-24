import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.scss']
})
export class JogoDaVelhaComponent implements OnInit {
public squares: any[] = Array(9);
public player:string = 'X';
public symbol: string[] = [];

constructor() {}

ngOnInit(): void {

}

play(index: number) {
  this.symbol[index] = this.player
}


}
