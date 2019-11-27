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
    operationArgs["--empId"],
    operationArgs["--beverage"],
    operationArgs["--quantity"],
    date
  );
  transactions.push(transactionsDetails);
  return transactions;
};

const formatTransactionDetails = function(
  empId,
  beverage,
  quantity,
  todayDate
) {
  let formatedDetails = {
    empId: empId,
    beverage: beverage,
    quantity: quantity,
    date: todayDate
  };
  return formatedDetails;
};

exports.addEmployeeTransaction = addEmployeeTransaction;
