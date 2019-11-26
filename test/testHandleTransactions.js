const getTransaction = require("../utils/HandleTransactionScript")
  .getTransactions;
const updateTransactions = require("../utils/HandleTransactionScript")
  .updateTransactions;
const searchEmployeeTransactions = require("../utils/HandleTransactionScript")
  .searchEmployeeTransactions;
const assert = require("assert");

describe("getTransactions", function() {
  const createFile = function(path, data, encoding) {
    assert.strictEqual(path, "./transactions.json");
    assert.deepStrictEqual(data, `{"a":"a"}`);
    assert.strictEqual(encoding, "utf8");
    return true;
  };
  const readFile = function(path, encoding) {
    assert.strictEqual(path, "./transactions.json");
    assert.strictEqual(encoding, "utf8");
    return "{}";
  };
  it("should get all the data form give json file", function() {
    assert.deepStrictEqual(getTransaction(createFile, readFile), {});
  });
});

describe("updateTransactions", function() {
  const createFile = function(path, data, encoding) {
    assert.strictEqual(path, "./transactions.json");
    assert.deepStrictEqual(data, `{"a":"a"}`);
    assert.strictEqual(encoding, "utf8");
    return true;
  };
  const writeFile = function(path, data, encoding) {
    assert.strictEqual(path, "./transactions.json");
    assert.deepStrictEqual(data, `{"a":"a"}`);
    assert.strictEqual(encoding, "utf8");
    return true;
  };
  it("should update the file with the values provided", function() {
    assert.strictEqual(
      updateTransactions({ a: "a" }, createFile, writeFile),
      undefined
    );
  });
});
describe("searchEmployeeTransactions", function() {
  it("should search the transaction if empId is given", function() {
    transactions = { 12: ["a", "b"] };
    assert.deepStrictEqual(searchEmployeeTransactions(12, transactions), [
      "a",
      "b"
    ]);
  });
});
