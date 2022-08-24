"use strict";

/* 

Conditional branching

*/

// Solution

message =
  login == "employee"
    ? "hi"
    : login == "boss"
    ? "hello"
    : login == ""
    ? "login is empty"
    : "";
