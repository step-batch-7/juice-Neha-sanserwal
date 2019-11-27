const valiadteEmpId = require("./common").isNum;
const validateQuantity = require("./common").isNum;
const validateBeverage = require("./common").isString;
const addEmployeeTransaction = require("../src/addEmployeeTransaction")
  .addEmployeeTransaction;
const getEmployeeTransaction = require("../src/getEmployeeTransaction")
  .getEmployeeTransaction;

const OPERATION_ARGS_KEYS = ["--beverage", "--empId", "--qty"];
const ARGS_VALIDATION_REF = {
  "--beverage": validateBeverage,
  "--empId": valiadteEmpId,
  "--qty": validateQuantity
};
const OPERATION = {
  "--save": addEmployeeTransaction,
  "--query": getEmployeeTransaction
};
const HEADER = "Employee ID, Beverage, Quantity, Date\n";

exports.ARGS_VALIDATION_REF = ARGS_VALIDATION_REF;
exports.OPERATION = OPERATION;
exports.HEADER = HEADER;
exports.OPERATION_ARGS_KEYS = OPERATION_ARGS_KEYS;
