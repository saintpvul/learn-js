"use strict";

/* 

functins

*/

// Solution

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Родители разрешили?");
}
// it works the same way
