const { transformArgsData } = require("../utils/transformArgsData");
const { OPERATIONS } = require("../utils/constants");
const { validateOperation } = require("./validateOperation");
const {
	getTransactions,
	updateTransactions
} = require("../utils/handleTransactionScript");
const { getTodayDate } = require("./config");
const { createFile, writeFile } = require("../utils/fileIO");
const { arrangeOutputFormat } = require("./arrangeOutputFormat");
const { HEADER } = require("../utils/constants");
const { OPERATION_ARGS_VALIDATION_REF } = require("../utils/constants");

const performSaveOperation = function(operation, operationArgs, path, date) {
	let updatedTransactions = OPERATIONS[operation](
		operationArgs,
		date,
		getTransactions,
		path
	);
	updateTransactions(updatedTransactions, createFile, writeFile, path);
	let entryAdded = updatedTransactions.slice(-1);
	return arrangeOutputFormat(entryAdded).transactionsHistory;
};

const performQueryOperation = function(operation, operationArgs, path) {
	let queryResult = OPERATIONS[operation](
		operationArgs,
		getTransactions,
		path
	);
	let transactions = arrangeOutputFormat(queryResult).transactionsHistory;
	let totalJuices = `Total: ${
		arrangeOutputFormat(queryResult).totalQuantity
	}`;
	totalJuices = `${totalJuices} Juices`;
	transactions.push(totalJuices);
	return transactions.join("\n");
};

const performOperation = function(operation, operationArgs, path, date) {
	if ("--save" === operation) {
		let endResult = performSaveOperation(
			operation,
			operationArgs,
			path,
			date
		);
		return HEADER.concat(endResult);
	}
	let endResult = performQueryOperation(operation, operationArgs, path);
	return HEADER.concat(endResult);
};

const handleOperation = function(transactionOperation, path, date) {
	let transformedArgs = transformArgsData(transactionOperation);
	let validOperation = validateOperation(
		transformedArgs,
		OPERATION_ARGS_VALIDATION_REF
	);
	if (validOperation) {
		let operations = Object.keys(transformedArgs);
		let operation = operations[0];
		let operationArgs = transformedArgs[operations[0]];
		return performOperation(operation, operationArgs, path, date);
	}
	return "PLEASE ENTER VALID INPUT";
};

exports.handleOperation = handleOperation;
