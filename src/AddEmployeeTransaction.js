const createFile = require("../utils/fileIO").createFile;

const readFile = require("../utils/fileIO").readFile;
const addEmployeeTransaction = function(
  operationArgs,
  getTodayDate,
  getTransactions
) {
  const transactions = getTransactions(createFile, readFile);
  const date = getTodayDate();
  const transactionsDetails = formatTransactionDetails(
    operationArgs["--beverage"],
    operationArgs["--quantity"],
    date
  );
  let empId = operationArgs["--empId"];
  if (transactions[empId]) {
    transactions[empId].push(transactionsDetails);
  } else {
    transactions[empId] = [transactionsDetails];
  }
  return transactions;
};

const formatTransactionDetails = function(beverage, quantity, todayDate) {
  let formatedDetails = {
    beverage: beverage,
    quantity: quantity,
    date: todayDate
  };
  return formatedDetails;
};

exports.addEmployeeTransaction = addEmployeeTransaction;
