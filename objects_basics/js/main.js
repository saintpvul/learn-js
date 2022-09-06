"use strict";

/* 

Object methods, "this"

*/

// Solution

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name);

// error. this is undefined
