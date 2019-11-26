const transformArgsData = require("../utils/TransformArgsData")
  .transformArgsData;
const operationRef = require("../utils/constants").OPERATION;
const valiadteArgs = require("./validateArgs").valiadteArgs;
const getTransactions = require("../utils/HandleTransactionScript")
  .getTransactions;
const updateTransactions = require("../utils/HandleTransactionScript")
  .updateTransactions;
const getTodayDate = require("../utils/common").getTodayDate;
const searchEmployeeTransactions = require("../utils/HandleTransactionScript")
  .searchEmployeeTransactions;
const createFile = require("../utils/fileIO").createFile;
const writeFile = require("../utils/fileIO").writeFile;

const performOperation = function(transactionOperation) {
  let transformedArgs = transformArgsData(transactionOperation);
  if (valiadteArgs(transformedArgs)) {
    let operations = Object.keys(transformedArgs);
    let operation = operations[0];
    let operationArgs = transformedArgs[operations[0]];
    let beverage = operationArgs["--beverage"];
    let empId = operationArgs["--empId"];
    let quantity = operationArgs["--quantity"];
    if ("--save" === operation) {
      updatedTransaction = operationRef[operation](
        empId,
        beverage,
        quantity,
        getTodayDate,
        getTransactions
      );
      updateTransactions(updatedTransaction, createFile, writeFile);
      return "Saved Successfully";
    }

    return operationRef[operation](
      empId,
      getTransactions,
      searchEmployeeTransactions
    );
  }
};
exports.performOperation = performOperation;
