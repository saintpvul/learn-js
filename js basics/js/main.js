"use strict";

/* 

While / for

*/

// Solution

let prime = 10;

nextPrime: for (let i = 2; i <= prime; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i);
}
