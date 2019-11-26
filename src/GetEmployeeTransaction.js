const getTransactionScript = require("../utils/HandleTransactionScript")
  .getTransactionScript;

const getEmployeeTransaction = function(
  empId,
  getTransactions,
  searchEmployeeTransactions
) {
  let transactions = getTransactions();

  if (transactions) {
    transactionsHistory = searchEmployeeTransactions(empId, transactions);
    return transactionsHistory;
  }
};

exports.getEmployeeTransaction = getEmployeeTransaction;
