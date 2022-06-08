import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1 = 0;
  num2 = 0;
  operate = '+';
  result = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  getFirstNum(num1) {
    this.num1 = num1.target.value;
  }

  getOperator(operator) {
    this.operate = operator.target.value;
  }

  getSecondNum(num2) {
    this.num2 = num2.target.value;
  }

  calculate() {
    if (this.operate === '+') {
      this.result = this.num1 + this.num2;
    }
    switch (this.operate) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case 'x':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        if (this.num1 !== 0) {
          this.result = this.num1 / this.num2;
          break;
        }
    }
  }
}
