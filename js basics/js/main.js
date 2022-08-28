"use strict";

/* 

functins

*/

// Solution

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Родители разрешили?");
  }
}
// if true will return logical value true / if not true return string
