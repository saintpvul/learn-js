"use strict";

/* 

logical operators

*/

// Solution

let age = prompt("enter your age");
if (!(age >= 14 && age <= 90)) alert("your age is outside the range");
else alert("your age is inside range");

let age1 = prompt("enter your age1");
if (age1 < 14 || age1 > 90) {
  alert("true");
} else alert("false");
