const getTransactionScript = require("../utils/HandleTransactionScript")
  .getTransactionScript;
const updateTransactionScript = require("../utils/HandleTransactionScript")
  .updateTrasactionScript;

const addEmployeeTransaction = function(empId, beverage, quantity) {
  const transactions = getTransactionScript();
  const todayDate = new Date();
  const transactionsDetails = formatTransactionDetails(
    beverage,
    quantity,
    todayDate
  );
  if (transactions[empId]) {
    transactions[empId].push(transactionsDetails);
  } else {
    transactions[empId] = [transactionsDetails];
  }
  updateTransactionScript(transactions);
  if (updateTransactionScript) {
    return "success";
  }
};

const formatTransactionDetails = function(beverage, quantity, todayDate) {
  let formatedDetails = {
    beverage: beverage,
    quantity: quantity,
    todayDate: todayDate
  };
  return formatedDetails;
};

exports.addEmployeeTransaction = addEmployeeTransaction;
