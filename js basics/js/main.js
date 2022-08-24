"use strict";

/* 

logical operators

*/

// Solution

let login = prompt("enter your login: ");
if (login === "admin") {
  let password = prompt("enter your pass:");

  if (password === "imaboss") {
    alert("Hello");
  } else if (password === "" || password === null) {
    alert("canceled");
  } else alert("wrong pass");
} else if (login === "" || login === null) {
  alert("canceled");
} else {
  alert("i don't know you");
}
