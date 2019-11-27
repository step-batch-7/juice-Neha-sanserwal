const assert = require("assert");
const getEmployeeTransaction = require("../src/getEmployeeTransaction")
  .getEmployeeTransaction;
describe("getEmployeeTransaction", function() {
  it("should return details if empId is present", function() {
    const getTransactions = function() {
      return [{ a: 1, b: "c" }];
    };
    const searchEmployeeTransaction = function(empId, transaction) {
      assert.deepStrictEqual(empId, 1);
      assert.deepStrictEqual(transaction, { a: 1, b: "c" });
      return { a: 1, b: "c" };
    };
    assert.deepStrictEqual(
      getEmployeeTransaction(1, getTransactions, searchEmployeeTransaction),
      [{ a: 1, b: "c" }]
    );
  });
  it("should not return details if empId is not present", function() {
    const getTransactions = function() {
      return [];
    };
    const searchEmployeeTransaction = function(empId, transactions) {
      assert.deepStrictEqual(empId, 2);
      assert.deepStrictEqual(transactions, {});
      return [];
    };
    assert.deepStrictEqual(
      getEmployeeTransaction(2, getTransactions, searchEmployeeTransaction),
      []
    );
  });
});
