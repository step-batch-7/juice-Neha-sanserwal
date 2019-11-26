const performOperation = require("./src/performOperation").performOperation;
const transactionOperation = process.argv.slice(2);
console.log(performOperation(transactionOperation));
// const stringifyTransactions = function(stringifiedTransactions, transaction) {
//   let stringifiedTransactions = {
//     totalQuantity: +0,
//     transactionsHistory: "",
//     empId: [empId]
//   };
//   //stringifiedTransactions = transactionsHistory.reduce(
//     //   stringifyTransactions,
//     //   stringifiedTransactions
//     // );
//   stringifiedTransactions["transactionsHistory"] +=
//     stringifiedTransactions["empId"] + "\t";
//   stringifiedTransactions["transactionsHistory"] +=
//     transaction["beverage"] + "\t";
//   stringifiedTransactions["transactionsHistory"] +=
//     transaction["quantity"] + "\t";
//   stringifiedTransactions["transactionsHistory"] +=
//     transaction["todayDate"] + "\t" + "\n";
//   stringifiedTransactions["totalQuantity"] += transaction["quantity"];
//   return stringifiedTransactions;
// };
