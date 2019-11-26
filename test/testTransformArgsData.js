const transformArgsData = require("../utils/TransformArgsData")
  .transformArgsData;
const assignOperationParameters = require("../utils/TransformArgsData")
  .assignOperationParameters;
const assert = require("assert");

describe("tranformArgsData", function() {
  it("should transform an array to object of object with first value to be main key", function() {
    let expected = {
      a: { "--beverage": "a", "--empId": "", "--quantity": "" }
    };
    let actual = transformArgsData(["a", "--beverage", "a"]);
    assert.deepStrictEqual(actual, expected);

    expected = {
      a: { "--beverage": "a", "--empId": "c", "--quantity": "" }
    };
    actual = transformArgsData(["a", "--beverage", "a", "--empId", "c"]);
    assert.deepStrictEqual(actual, expected);
  });

  it("should return empty object for empty array", function() {
    assert.deepStrictEqual(transformArgsData([]), {});
  });

  it("should return object for array of odd length", function() {
    let expected = {
      a: { "--beverage": "as", "--empId": "", "--quantity": "" }
    };
    let actual = transformArgsData(["a", "--beverage", "as"]);
    assert.deepStrictEqual(actual, expected);
  });
  it("should return object for array of even length", function() {
    let expected = {
      a: { "--beverage": "", "--empId": "", "--quantity": "" }
    };
    let actual = transformArgsData(["a", "--beverage"]);
    assert.deepStrictEqual(actual, expected);
  });
});

describe("pairOperationParameters", function() {
  let operationArgs = {
    "--beverage": "",
    "--empId": "",
    "--quantity": ""
  };
  it("should return object of key value pair two consucative value of array", function() {
    let expected = {
      "--beverage": "",
      "--empId": "",
      "--quantity": "",
      a: "b"
    };
    assert.deepStrictEqual(
      assignOperationParameters(["a", "b"], operationArgs),
      expected
    );
  });

  it("should return empty object for empty array", function() {
    let expected = { "--beverage": "", "--empId": "", "--quantity": "" };
    operationArgs = {
      "--beverage": "",
      "--empId": "",
      "--quantity": ""
    };
    assert.deepStrictEqual(
      assignOperationParameters([], operationArgs),
      expected
    );
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
    assert.deepStrictEqual(
      assignOperationParameters(["a"], operationArgs),
      expected
    );
  });

  it("should return object of key value pair for array of odd length", function() {
    operationArgs = {
      "--beverage": "",
      "--empId": "",
      "--quantity": ""
    };
    let expected = {
      "--beverage": "",
      "--empId": "",
      "--quantity": "",
      a: "b"
    };
    assert.deepStrictEqual(
      assignOperationParameters(["a", "b"], operationArgs),
      expected
    );
  });
});
