const stringifyTransactions = function(formatedString, transactions) {
  formatedString["transactionsHistory"] += transactions["empId"] + ",";
  formatedString["transactionsHistory"] += transactions["beverage"] + ",";
  formatedString["transactionsHistory"] += transactions["quantity"] + ",";
  formatedString["transactionsHistory"] += transactions["date"] + "\n";
  formatedString["totalQuantity"] += +transactions["quantity"];
  return formatedString;
};

const arrangeOutputFormat = function(entry) {
  let formatedString = {
    totalQuantity: +0,
    transactionsHistory: ""
  };
  formatedString = entry.reduce(stringifyTransactions, formatedString);
  return formatedString;
};

exports.arrangeOutputFormat = arrangeOutputFormat;
exports.stringifyTransactions = stringifyTransactions;
