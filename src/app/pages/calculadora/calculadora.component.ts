import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  public display: any;
  operator: string;
  firstValue: number;

  constructor() { }

  ngOnInit(): void {

  }

  addNum(num: number) {
    if (!this.display) {
      this.display = num.toString();
    } else {
      this.display = `${this.display}${num}`
    }
  }

  chooseOperator(operator: string) {
    this.firstValue = parseFloat(this.display);
    this.operator = operator;
    this.display = '';
  }

  calculate() {
    const a = this.firstValue;
    const b = parseFloat(this.display);
    let result;

    if (this.operator == 'm') {
      result = a * b;
    } else if (this.operator == 'd') {
      result = a / b;
    } else if (this.operator == 'a') {
      result = a + b;
    } else {
      result = a - b;
    }

    this.firstValue = result;
    this.display = result?.toString();
  }

  clean() {
    if (!this.display) {
      this.firstValue = 0
    } else {
      this.display = '';
    }
  }


}
