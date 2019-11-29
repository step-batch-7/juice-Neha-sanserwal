const transformArgsData = require("../utils/transformArgsData")
  .transformArgsData;
const operationRef = require("../utils/constants").OPERATION;
const validateOperation = require("./validateArgs").validateOperation;
const getTransactions = require("../utils/handleTransactionScript")
  .getTransactions;
const updateTransactions = require("../utils/handleTransactionScript")
  .updateTransactions;
const getTodayDate = require("../utils/common").getTodayDate;
const createFile = require("../utils/fileIO").createFile;
const writeFile = require("../utils/fileIO").writeFile;
const arrangeOutputFormat = require("./arrangeOutputFormat")
  .arrangeOutputFormat;
const HEADER = require("../utils/constants").HEADER;
const OPERATION_ARGS_VALIDATION_REF = require("../utils/constants")
  .OPERATION_ARGS_VALIDATION_REF;

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

const performQueryOperation = function(operation, operationArgs) {
  let queryResult = operationRef[operation](operationArgs, getTransactions);
  let transactions = arrangeOutputFormat(queryResult).transactionsHistory;
  let totalJuices = "Total: " + arrangeOutputFormat(queryResult).totalQuantity;
  totalJuices = totalJuices + " Juices";
  return transactions + totalJuices;
};

const performOperation = function(operation, operationArgs) {
  let empId = operationArgs["--empId"];
  if ("--save" === operation) {
    let endResult = performSaveOperation(operation, operationArgs, empId);
    return HEADER.concat(endResult);
  }
  let endResult = performQueryOperation(operation, operationArgs);
  return HEADER.concat(endResult);
};

const handleOperation = function(transactionOperation) {
  let transformedArgs = transformArgsData(transactionOperation);
  let validOperation = validateOperation(
    transformedArgs,
    OPERATION_ARGS_VALIDATION_REF
  );
  if (validOperation) {
    let operations = Object.keys(transformedArgs);
    let operation = operations[0];
    let operationArgs = transformedArgs[operations[0]];
    return performOperation(operation, operationArgs);
  }
  return "PLEASE ENTER VALID INPUT";
};

exports.handleOperation = handleOperation;
