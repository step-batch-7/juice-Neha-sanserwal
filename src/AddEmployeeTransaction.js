const addEmployeeTransaction = function(
  empId,
  beverage,
  quantity,
  getTodayDate,
  getTransactions
) {
  const transactions = getTransactions();
  const date = getTodayDate();
  const transactionsDetails = formatTransactionDetails(
    beverage,
    quantity,
    date
  );
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
