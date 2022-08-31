"use strict";

/* 

Automated testing with Mocha start

*/

// Solution

it("raises x to the power n", function () {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

//all test inserts in one it block. hard to test separate case.

describe("raises x to the power n", function () {
  it("5 in the power 1 will be 5", function () {
    assert.equal(pow(5, 1), 5);
  });

  it("5 in the power 2 will be 25", function () {
    assert.equal(pow(5, 2), 25);
  });

  it("5 in the power 3 will be 125", function () {
    assert.equal(pow(5, 3), 125);
  });
});
