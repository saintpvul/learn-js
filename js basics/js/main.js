"use strict";

/* 

functins

*/

// Solution

function pow(x, n) {
  let result = x;

  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

let x = +prompt("x?", "");
let n = +prompt("n?", "");

if (n < 1) {
  alert("you have to use natural numbers");
} else {
  alert(pow(x, n));
}
