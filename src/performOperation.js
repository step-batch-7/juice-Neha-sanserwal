const transformArgsData = require("../utils/transformArgsData")
  .transformArgsData;
const operationRef = require("../utils/constants").OPERATION;
const valiadteArgs = require("./validateArgs").valiadteArgs;
const getTransactions = require("../utils/handleTransactionScript")
  .getTransactions;
const updateTransactions = require("../utils/handleTransactionScript")
  .updateTransactions;
const getTodayDate = require("../utils/common").getTodayDate;
const searchEmployeeTransactions = require("../utils/handleTransactionScript")
  .searchEmployeeTransactions;
const createFile = require("../utils/fileIO").createFile;
const writeFile = require("../utils/fileIO").writeFile;
const arrangeOutputFormat = require("./arrangeOutputFormat")
  .arrangeOutputFormat;

const performSaveOperation = function(operation, operationArgs) {
  let updatedTransactions = operationRef[operation](
    operationArgs,
    getTodayDate,
    getTransactions
  );
  updateTransactions(updatedTransactions, createFile, writeFile);
  let entryAdded = updatedTransactions.slice(-1);
  return arrangeOutputFormat(entryAdded).transactionsHistory;
};

const performQueryOperation = function(operation, empId) {
  let query = operationRef[operation](
    empId,
    getTransactions,
    searchEmployeeTransactions
  );
  return JSON.stringify(query);
  // let queryResults = arrangeOutputFormat(empId, query);
  return (
    queryResults.transactionsHistory + "total: " + queryResults.totalQuantity
  );
};

const performOperation = function(transactionOperation) {
  let transformedArgs = transformArgsData(transactionOperation);
  if (valiadteArgs(transformedArgs)) {
    let operations = Object.keys(transformedArgs);
    let operation = operations[0];
    let operationArgs = transformedArgs[operations[0]];
    let empId = operationArgs["--empId"];
    if ("--save" === operation) {
      return performSaveOperation(operation, operationArgs, empId);
    }
    return performQueryOperation(operation, empId);
  }
  return "PLEASE ENTER VALID INPUT";
};

exports.performOperation = performOperation;
