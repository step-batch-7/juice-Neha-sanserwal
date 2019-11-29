const fs = require("fs");
const getTransactions = function(createFile, readFile) {
  if (!fs.existsSync("./transactions.json")) {
    createFile("./transactions.json", "[]", "utf8");
  }
  let transactions = readFile("./transactions.json", "utf8");
  transactions = JSON.parse(transactions);
  return transactions;
};

const updateTransactions = function(transactions, createFile, writeFile) {
  if (!fs.existsSync("./transactions.json")) {
    createFile("./transactions.json", "[]", "utf8");
  }
  transactions = JSON.stringify(transactions);
  writeFile("./transactions.json", transactions, "utf8");
};

exports.getTransactions = getTransactions;
exports.updateTransactions = updateTransactions;
