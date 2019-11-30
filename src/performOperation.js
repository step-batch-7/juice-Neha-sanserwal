const transformArgsData = require("../utils/transformArgsData")
	.transformArgsData;
const { OPERATIONS } = require("../utils/constants");
const validateOperation = require("./validateOperation").validateOperation;
const {
	getTransactions,
	updateTransactions
} = require("../utils/handleTransactionScript");
const getTodayDate = require("../utils/common").getTodayDate;
const { createFile, writeFile } = require("../utils/fileIO");
const { arrangeOutputFormat } = require("./arrangeOutputFormat");
const { HEADER } = require("../utils/constants");
const { OPERATION_ARGS_VALIDATION_REF } = require("../utils/constants");

const performSaveOperation = function(operation, operationArgs) {
	let updatedTransactions = OPERATIONS[operation](
		operationArgs,
		getTodayDate,
		getTransactions
	);
	updateTransactions(updatedTransactions, createFile, writeFile);

	let entryAdded = updatedTransactions.slice(-1);
	return arrangeOutputFormat(entryAdded).transactionsHistory;
};

const performQueryOperation = function(operation, operationArgs) {
	let queryResult = OPERATIONS[operation](operationArgs, getTransactions);
	let transactions = arrangeOutputFormat(queryResult).transactionsHistory;
	let totalJuices =
		"\nTotal: " + arrangeOutputFormat(queryResult).totalQuantity;
	totalJuices = totalJuices + " Juices";
	return transactions.join("\n") + totalJuices;
};

const performOperation = function(operation, operationArgs) {
	let empId = operationArgs["empId"];
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
