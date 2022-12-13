"use strict";

/* 

Numbers

*/

// Solution

// start data types section

/*

Sum numbers from the visitor
importance: 5
Create a script that prompts the visitor to enter two numbers and then shows their sum.

Run the demo

P.S. There is a gotcha with types.

solution
---
*/

let getA = +prompt("Enter firts number: "),
  getB = +prompt("Enter second number: ");

function getSum(a, b) {
  return a && b && !isNaN(a) && !isNaN(b)
    ? console.log(a + b)
    : console.log("Parameter is not a number!");
}

getSum(getA, getB);

console.log("--------------");
/*
--------------

Why 6.35.toFixed(1) == 6.3?
importance: 4
According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.

For instance:

alert( 1.35.toFixed(1) ); // 1.4
In the similar example below, why is 6.35 rounded to 6.3, not 6.4?

alert( 6.35.toFixed(1) ); // 6.3
How to round 6.35 the right way?

solution

*/

let currentNum = 6.35;

console.log(currentNum.toFixed(1));

console.log(currentNum.toFixed(20));

console.log(Math.round(currentNum * 10) / 10);

console.log("--------------");

/*

---------------------

Repeat until the input is a number
importance: 5
Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

The resulting value must be returned as a number.

The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.

*/

function readNumber() {
  let getNum;
  do {
    getNum = prompt("Enter your number, please: ");
  } while (!isFinite(getNum));

  console.log(getNum);
}

readNumber();

console.log("--------------");

/*

An occasional infinite loop
importance: 4
This loop is infinite. It never ends. Why?

let i = 0;
while (i != 10) {
  i += 0.2;
}

*/

let i = 0;
while (i < 11) {
  i += 0.2;
  if (parseInt(i) === 10) {
    console.log(parseInt(i));
  }
}

console.log("--------------");

/*

-------------------

A random number from min to max
importance: 2
The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

Examples of its work:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525

*/

const random = (min, max) => console.log(min + Math.random() * (max - min));

random(1, 13);

console.log("--------------");

/*
-------------------

A random integer from min to max
importance: 2
Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

Any number from the interval min..max must appear with the same probability.

Examples of its work:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
You can use the solution of the previous task as the base.

*/

const randomInteger = (min, max) =>
  console.log(Math.floor(min + Math.random() * (max + 1 - min)));

randomInteger(1, 13);

console.log("--------------");
