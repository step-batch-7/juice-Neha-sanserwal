const isString = require("../utils/common").isString;
const isNum = require("../utils/common").isNum;
const assert = require("assert");
describe("isString", function() {
  it("should return true if the parameter is string", function() {
    assert.ok(isString("a"));
  });
  it("should return false is the parameter is not a string", function() {
    assert.ok(!isString(1));
  });
});

describe("isNum", function() {
  it("should return true is argument is number", function() {
    assert.ok(isNum("2"));
  });
  it("should return false is argument is not number", function() {
    assert.ok(!isNum("a"));
  });
});