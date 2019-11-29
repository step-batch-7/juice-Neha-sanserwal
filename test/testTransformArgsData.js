const assert = require("assert");
const transformArgsData = require("../utils/transformArgsData")
  .transformArgsData;
const assignOperationParameters = require("../utils/transformArgsData")
  .assignOperationParameters;

describe("tranformArgsData", function() {
  it("should transform an array to object of object with first value to be main key", function() {
    let expected = { a: { "--beverage": "a" } };
    let actual = transformArgsData(["a", "--beverage", "a"]);
    assert.deepStrictEqual(actual, expected);

    expected = { a: { "--beverage": "a", "--empId": "c" } };
    actual = transformArgsData(["a", "--beverage", "a", "--empId", "c"]);
    assert.deepStrictEqual(actual, expected);
  });

  it("should return empty object for empty array", function() {
    assert.deepStrictEqual(transformArgsData([]), {});
  });

  it("should return object for array of odd length", function() {
    let expected = { a: { "--beverage": "as" } };
    let actual = transformArgsData(["a", "--beverage", "as"]);
    assert.deepStrictEqual(actual, expected);
  });
  it("should return object for array of even length", function() {
    let expected = { a: { "--beverage": undefined } };
    let actual = transformArgsData(["a", "--beverage"]);
    assert.deepStrictEqual(actual, expected);
  });
});

describe("assignOperationParameters", function() {
  let operationArgs = {
    "--beverage": "",
    "--empId": "",
    "--quantity": ""
  };
  it("should give object of key value pair two consucative value of array", function() {
    assert.deepStrictEqual(assignOperationParameters(["a", "b"]), { a: "b" });
  });

  it("should return empty object for empty array", function() {
    let expected = { "--beverage": "", "--empId": "", "--quantity": "" };
    assert.deepStrictEqual(assignOperationParameters([]), {});
  });

  it("should return object of key value pair for array of odd length", function() {
    let expected = {
      "--beverage": "",
      "--empId": "",
      "--quantity": ""
    };
    operationArgs = {
      "--beverage": "",
      "--empId": "",
      "--quantity": ""
    };
    assert.deepStrictEqual(assignOperationParameters(["a"]), { a: undefined });
  });

  it("should return object of key value pair for array of even length", function() {
    assert.deepStrictEqual(assignOperationParameters(["a", "b"]), { a: "b" });
  });
});
