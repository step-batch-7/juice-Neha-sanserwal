const createFile = require("../utils/fileIO").createFile;
const readFile = require("../utils/fileIO").readFile;
const getEmployeeTransaction = function(
  empId,
  getTransactions,
  searchEmployeeTransactions
) {
  let transactions = getTransactions(createFile, readFile);
  if (transactions) {
    let transactionsHistory = [];
    for (transaction of transactions) {
      transactionsHistory.push(searchEmployeeTransactions(empId, transaction));
    }
    return transactionsHistory;
  }
};

exports.getEmployeeTransaction = getEmployeeTransaction;
