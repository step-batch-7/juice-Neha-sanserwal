const assert = require("assert");
const getEmployeeTransaction = require("../src/GetEmployeeTransaction")
  .getEmployeeTransaction;

const transactions = require("../utils/HandleTransactionScript").getTransactionScript();

// describe("getEmployeeTransaction", function() {
//   it("should return a stringified value of given key", function() {
//     assert.deepStrictEqual(getEmployeeTransaction(257, transactions), {
//       empId: [257],
//       totalQuantity: 12,
//       transactionsHistory:
//         "257\tOrge\t1\t2019-11-23T04:52:08.039Z\t\n257\tbanana\t2\t2019-11-23T04:52:08.041Z\t\n257\tOrge\t1\t2019-11-23T05:22:23.149Z\t\n257\tbanana\t2\t2019-11-23T05:22:23.151Z\t\n257\tOrge\t1\t2019-11-23T11:38:12.432Z\t\n257\tbanana\t2\t2019-11-23T11:38:12.435Z\t\n257\tOrge\t1\t2019-11-23T11:38:32.639Z\t\n257\tbanana\t2\t2019-11-23T11:38:32.641Z\t\n"
//     });
//   });
//   it("should return an empty string if the key doesn't exist", function() {
//     assert.deepStrictEqual(getEmployeeTransaction(156, transactions), {
//       empId: [156],
//       totalQuantity: 0,
//       transactionsHistory: ""
//     });
//   });
// });
