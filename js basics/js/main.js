"use strict";

/* 

Arrow functions, the basics

*/

// Solution

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Do you agree?",
  () => alert("Agreed"),
  () => alert("Canceled")
);
