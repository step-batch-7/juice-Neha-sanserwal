const createFile = require("../utils/fileIO").createFile;
const readFile = require("../utils/fileIO").readFile;

const getEmployeeTransaction = function(queryArgs, getTransactions) {
  let transactions = getTransactions(createFile, readFile);
  if (transactions) {
    let transactionsHistory = [];
    for (transaction of transactions) {
      if (matchingTransaction(queryArgs, transaction)) {
        transactionsHistory.push(transaction);
      }
    }
    return transactionsHistory;
  }
};

const matchingTransaction = function(queryArgs, transaction) {
  let transactionValues = Object.values(transaction);
  let queryValues = Object.values(queryArgs);
  return queryValues.every(function(value) {
    return transactionValues.includes(value);
  });
};

exports.getEmployeeTransaction = getEmployeeTransaction;
exports.matchingTransaction = matchingTransaction;
