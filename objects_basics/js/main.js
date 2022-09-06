"use strict";

/* 

Object methods, "this"

*/

// Solution

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    (this.a = +prompt("a?", 0)), (this.b = +prompt("b", 0));
  },
};

calculator.read();
alert(`sum = ${calculator.sum()}`);
alert(`mul = ${calculator.mul()}`);
