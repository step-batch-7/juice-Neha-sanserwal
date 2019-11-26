const addEmployeeTransaction = require("../src/addEmployeeTransaction")
  .addEmployeeTransaction;
const transactions = require("../utils/HandleTransactionScript")
  .getTransactionScript;
const assert = require("assert");

describe("addEmployeeTransaction", function() {
  it("should update empId with details to transactions id it exist", function() {
    const getTransactions = function() {
      return {
        2: [
          {
            beverage: "a",
            quantity: 2,
            date: "23-11-2000"
          }
        ]
      };
    };
    const getTodayDate = function() {
      return "1-1-2000";
    };
    let expected = {
      "2": [
        {
          beverage: "a",
          date: "23-11-2000",
          quantity: 2
        },
        {
          beverage: "Orange",
          date: "1-1-2000",
          quantity: 1
        }
      ]
    };
    assert.deepStrictEqual(
      addEmployeeTransaction(2, "Orange", 1, getTodayDate, getTransactions),
      expected
    );
  });
  it("should update empId with details to transactions id it exist", function() {
    const getTransactions = function() {
      return {};
    };

    const getTodayDate = function() {
      return "1-1-2000";
    };

    let expected = {
      "2": [
        {
          beverage: "Orange",
          date: "1-1-2000",
          quantity: 1
        }
      ]
    };
    assert.deepStrictEqual(
      addEmployeeTransaction(2, "Orange", 1, getTodayDate, getTransactions),
      expected
    );
  });
});
