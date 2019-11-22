const fs = require("fs");

const getTransactionScript = function() {
  let transactions = fs.readFileSync("./transactions.json", "utf8");
  transactions = JSON.parse(transactions);
  return transactions;
};

const updateTrasactionScript = function(transactions) {
  transactions = JSON.stringify(transactions);
  fs.writeFileSync("./transactions.json", transactions, "utf8");
};

exports.getTransactionScript = getTransactionScript;
exports.updateTrasactionScript = updateTrasactionScript;
