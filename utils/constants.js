const valiadteEmpId = require("./common").isNum;
const validateQuantity = require("./common").isNum;
const validateBeverage = require("./common").isString;
const addEmployeeTransaction = require("../src/addEmployeeTransaction")
  .addEmployeeTransaction;
const getEmployeeTransaction = require("../src/getEmployeeTransaction")
  .getEmployeeTransaction;

const OPERATION_ARGS_KEYS = ["--beverage", "--empId", "--qty", "--date"];

const SAVE_ARGS_VALIDATION_REF = {
  "--beverage": validateBeverage,
  "--empId": valiadteEmpId,
  "--qty": validateQuantity
};
const QUERY_ARGS_VALIDATION_REF = {
  "--empId": valiadteEmpId,
  "--beverage": validateBeverage,
  "--date": function() {
    return true;
  }
};

const OPERATION_ARGS_VALIDATION_REF = {
  "--save": SAVE_ARGS_VALIDATION_REF,
  "--query": QUERY_ARGS_VALIDATION_REF
};
const QUERY_ARGS = {
  "--empId": "",
  "--date": ""
};

const OPERATION = {
  "--save": addEmployeeTransaction,
  "--query": getEmployeeTransaction
};

const HEADER = "Employee ID, Beverage, Quantity, Date\n";

exports.SAVE_ARGS_VALIDATION_REF = SAVE_ARGS_VALIDATION_REF;
exports.OPERATION = OPERATION;
exports.HEADER = HEADER;
exports.QUERY_ARGS = QUERY_ARGS;
exports.OPERATION_ARGS_KEYS = OPERATION_ARGS_KEYS;
exports.QUERY_ARGS_VALIDATION_REF = QUERY_ARGS_VALIDATION_REF;
exports.OPERATION_ARGS_VALIDATION_REF = OPERATION_ARGS_VALIDATION_REF;
