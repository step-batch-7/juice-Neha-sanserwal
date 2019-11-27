const assert = require("assert");
const getEmployeeTransaction = require("../src/getEmployeeTransaction")
  .getEmployeeTransaction;
describe("getEmployeeTransaction", function() {
  it("should return details if empId is present", function() {
    const getTransactions = function() {
      return {
        12: ["a", "b", "c"],
        1: ["a"]
      };
    };
    const searchEmployeeTransaction = function(empId, transactions) {
      assert.deepStrictEqual(empId, 12);
      assert.deepStrictEqual(transactions, {
        12: ["a", "b", "c"],
        1: ["a"]
      });
      return ["a", "b", "c"];
    };
    assert.deepStrictEqual(
      getEmployeeTransaction(12, getTransactions, searchEmployeeTransaction)[
        ("a", "b", "c")
      ]
    );
  });
  it("should not return details if empId is not present", function() {
    const getTransactions = function() {
      return {
        12: ["a", "b", "c"],
        1: ["a"]
      };
    };
    const searchEmployeeTransaction = function(empId, transactions) {
      assert.deepStrictEqual(empId, 2);
      assert.deepStrictEqual(transactions, {
        12: ["a", "b", "c"],
        1: ["a"]
      });
      return [];
    };
    assert.deepStrictEqual(
      getEmployeeTransaction(2, getTransactions, searchEmployeeTransaction),
      []
    );
  });
});
