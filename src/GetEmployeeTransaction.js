const searchEmployeeTransactions = require("../utils/HandleTransactionScript")
  .searchEmployeeTransactions;
const getTransactionScript = require("../utils/HandleTransactionScript")
  .getTransactionScript;
const stringifyTransactions = function(stringifiedTransactions, transaction) {
  stringifiedTransactions["transactionsHistory"] +=
    stringifiedTransactions["empId"] + "\t";
  stringifiedTransactions["transactionsHistory"] +=
    transaction["beverage"] + "\t";
  stringifiedTransactions["transactionsHistory"] +=
    transaction["quantity"] + "\t";
  stringifiedTransactions["transactionsHistory"] +=
    transaction["todayDate"] + "\t" + "\n";
  stringifiedTransactions["totalQuantity"] += transaction["quantity"];
  return stringifiedTransactions;
};
const getEmployeeTransaction = function(empId) {
  let transactions = getTransactionScript();
  let stringifiedTransactions = {
    totalQuantity: +0,
    transactionsHistory: "",
    empId: [empId]
  };

  if (transactions) {
    transactionsHistory = searchEmployeeTransactions(empId, transactions);
    // stringifiedTransactions = transactionsHistory.reduce(
    //   stringifyTransactions,
    //   stringifiedTransactions
    // );
    return transactionsHistory;
  }
};

exports.getEmployeeTransaction = getEmployeeTransaction;
