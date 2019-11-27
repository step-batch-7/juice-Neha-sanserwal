const createFile = require("../utils/fileIO").createFile;
const readFile = require("../utils/fileIO").readFile;
const getEmployeeTransaction = function(
  empId,
  getTransactions,
  searchEmployeeTransactions
) {
  let transactions = getTransactions(createFile, readFile);
  if (transactions) {
    transactionsHistory = searchEmployeeTransactions(empId, transactions);
    return transactionsHistory;
  }
};

exports.getEmployeeTransaction = getEmployeeTransaction;
