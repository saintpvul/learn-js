"use strict";

/* 

Constructor, operator "new"

*/

// Solution

function Calculator() {
  (this.read = function () {
    this.a = +prompt("Enter first number:", 0);
    this.b = +prompt("Enter second number", 0);
  }),
    (this.sum = function () {
      return this.a + this.b;
    }),
    (this.mul = function () {
      return this.a * this.b;
    });
}

let calc = new Calculator();
calc.read();

alert("Sum=" + calc.sum());
alert("Mul=" + calc.mul());
