"use strict";

/* 

switch construction

*/

// Solution

const number = +prompt("Enter number from 0 to 3:", "");
switch (number) {
  case 0:
    alert("You enter 0");
    break;

  case 1:
    alert("You enter 1");
    break;

  case 2:
  case 3:
    alert("You enter 2, or maybe 3");
    break;
}
