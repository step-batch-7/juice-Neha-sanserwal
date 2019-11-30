const valiadteEmpId = require("./common").isNum;
const validateQuantity = require("./common").isNum;
const validateBeverage = require("./common").isString;
const validateDate = require("./common").isValidDate;
const { addEmployeeTransaction } = require("../src/addEmployeeTransaction");
const { getEmployeeTransaction } = require("../src/getEmployeeTransaction");

const OPERATION_ARGS_KEYS = ["beverage", "empId", "qty", "date"];

const SAVE_ARGS_VALIDATION_REF = {
	beverage: validateBeverage,
	empId: valiadteEmpId,
	qty: validateQuantity
};
const QUERY_ARGS_VALIDATION_REF = {
	empId: valiadteEmpId,
	beverage: validateBeverage,
	date: validateDate
};

const OPERATION_ARGS_VALIDATION_REF = {
	"--save": SAVE_ARGS_VALIDATION_REF,
	"--query": QUERY_ARGS_VALIDATION_REF
};
const QUERY_ARGS = {
	empId: "",
	date: ""
};

const OPERATIONS = {
	"--save": addEmployeeTransaction,
	"--query": getEmployeeTransaction
};

const HEADER = "Employee ID, Beverage, Quantity, Date\n";
module.exports = {
	SAVE_ARGS_VALIDATION_REF: SAVE_ARGS_VALIDATION_REF,
	OPERATIONS: OPERATIONS,
	HEADER: HEADER,
	QUERY_ARGS: QUERY_ARGS,
	OPERATION_ARGS_KEYS: OPERATION_ARGS_KEYS,
	QUERY_ARGS_VALIDATION_REF: QUERY_ARGS_VALIDATION_REF,
	OPERATION_ARGS_VALIDATION_REF: OPERATION_ARGS_VALIDATION_REF
};
