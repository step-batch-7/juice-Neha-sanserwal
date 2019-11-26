const fs = require("fs");
const createTransactionScript = function() {
  return fs.writeFileSync("./transactions.json", "{}", "utf8");
};
const getTransactions = function() {
  if (!fs.existsSync("./transactions.json")) {
    createTransactionScript();
  }
  let transactions = fs.readFileSync("./transactions.json", "utf8");
  transactions = JSON.parse(transactions);
  return transactions;
};

const updateTransactions = function(transactions) {
  if (!fs.existsSync("./transactions.json")) {
    createTransactionScript();
  }
  transactions = JSON.stringify(transactions);
  fs.writeFileSync("./transactions.json", transactions, "utf8");
};

const searchEmployeeTransactions = function(empId, transactions) {
  let transactionsHistory = [];
  if (!transactions[empId]) {
    return transactionsHistory;
  }
  transactionsHistory = transactions[empId];
  return transactionsHistory;
};

exports.getTransactions = getTransactions;
exports.updateTransactions = updateTransactions;
exports.searchEmployeeTransactions = searchEmployeeTransactions;
