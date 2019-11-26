const valiadteEmpId = require("./common").isNum;
const validateBeverage = require("./common").isString;
const addEmployeeTransaction = require("../src/AddEmployeeTransaction")
  .addEmployeeTransaction;
const getEmployeeTransaction = require("../src/GetEmployeeTransaction")
  .getEmployeeTransaction;
const ARGS_VALIDATION_REF = {
  "--beverage": validateBeverage,
  "--empId": valiadteEmpId,
  "--quantity": valiadteEmpId
};
const OPERATION = {
  "--save": addEmployeeTransaction,
  "--query": getEmployeeTransaction
};
exports.ARGS_VALIDATION_REF = ARGS_VALIDATION_REF;
exports.OPERATION = OPERATION;
