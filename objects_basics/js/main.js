"use strict";

/* 

Objects

*/

// Solution

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};

console.log(isEmpty(schedule));
