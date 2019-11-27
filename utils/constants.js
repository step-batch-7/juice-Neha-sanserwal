const valiadteEmpId = require("./common").isNum;
const validateBeverage = require("./common").isString;
const addEmployeeTransaction = require("../src/addEmployeeTransaction")
  .addEmployeeTransaction;
const getEmployeeTransaction = require("../src/getEmployeeTransaction")
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
const HEADER = "Employee ID, Beverage, Quantity, Date\n";
exports.ARGS_VALIDATION_REF = ARGS_VALIDATION_REF;
exports.OPERATION = OPERATION;
exports.HEADER = HEADER;
