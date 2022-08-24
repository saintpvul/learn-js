"use strict";

/* 

Conditional branching

*/

// Solution

let ask = prompt("Enter any number");
if (ask > 0) {
  alert(1);
} else if (ask < 0) {
  alert(-1);
} else if (ask == 0) {
  alert("0");
} else {
  alert("it is not a number i guess");
}
