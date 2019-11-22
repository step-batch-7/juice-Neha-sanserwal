const addEmployeeTransaction = require("../src/addEmployeeTransaction")
  .addEmployeeTransaction;
const transactions = require("../utils/HandleTransactionScript")
  .getTransactionScript;
const assert = require("assert");

describe("addEmployeeTransaction", function() {
  it("should append new empId with details to transactions", function() {
    assert.strictEqual(addEmployeeTransaction(25327, "Orange", 1), "success");
    assert.strictEqual(addEmployeeTransaction(257, "Orge", 1), "success");
  });
  it("should update transaction history if empId already exists", function() {
    assert.strictEqual(addEmployeeTransaction(257, "banana", 2), "success");
    assert.strictEqual(addEmployeeTransaction(25327, "apple", 1), "success");
  });
});
