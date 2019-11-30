const stringifyTransactions = function(formatedString, transactions) {
  formatedString["transactionsHistory"].push([
    transactions["empId"],
    transactions["beverage"],
    transactions["quantity"],
    transactions["date"]
  ]);
  formatedString["totalQuantity"] += +transactions["quantity"];
  return formatedString;
};

const arrangeOutputFormat = function(entry) {
  let formatedString = {
    totalQuantity: +0,
    transactionsHistory: []
  };
  formatedString = entry.reduce(stringifyTransactions, formatedString);
  return formatedString;
};

exports.arrangeOutputFormat = arrangeOutputFormat;
exports.stringifyTransactions = stringifyTransactions;
