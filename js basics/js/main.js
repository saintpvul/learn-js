"use strict";

/* 

switch construction

*/

// Solution

if (browser === "Edge") {
  alert("You've got the Edge");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  alert("okay we suppert these browsers too");
} else {
  alert("We hope that this page looks ok!");
}
