const { transformArgsData } = require("../utils/transformArgsData");
const { OPERATIONS } = require("../utils/constants");
const { validateOperation } = require("./validateOperation");
const {
	getTransactions,
	updateTransactions
} = require("../utils/handleTransactionScript");
const { arrangeOutputFormat } = require("./arrangeOutputFormat");
const { HEADER } = require("../utils/constants");
const { OPERATION_ARGS_VALIDATION_REF } = require("../utils/constants");

const performSaveOperation = function(
	operation,
	operationArgs,
	envVars,
	fsModules
) {
	let updatedTransactions = OPERATIONS[operation](
		operationArgs,
		getTransactions,
		envVars,
		fsModules
	);
	updateTransactions(updatedTransactions, fsModules, envVars);
	let entryAdded = updatedTransactions.slice(-1);
	return arrangeOutputFormat(entryAdded).transactionsHistory;
};

const performQueryOperation = function(
	operation,
	operationArgs,
	envVars,
	fsModules
) {
	let queryResult = OPERATIONS[operation](
		operationArgs,
		getTransactions,
		envVars,
		fsModules
	);
	let transactions = arrangeOutputFormat(queryResult).transactionsHistory;
	let totalJuices = `Total: ${
		arrangeOutputFormat(queryResult).totalQuantity
	}`;
	totalJuices = `${totalJuices} Juices`;
	transactions.push(totalJuices);
	return transactions.join("\n");
};

const performOperation = function(
	operation,
	operationArgs,
	envVars,
	fsModules
) {
	if ("--save" === operation) {
		let endResult = performSaveOperation(
			operation,
			operationArgs,
			envVars,
			fsModules
		);
		return HEADER.concat(endResult);
	}
	let endResult = performQueryOperation(
		operation,
		operationArgs,
		envVars,
		fsModules
	);
	return HEADER.concat(endResult);
};

const handleOperation = function(transactionOperation, envVars, fsModules) {
	let transformedArgs = transformArgsData(transactionOperation);
	let validOperation = validateOperation(
		transformedArgs,
		OPERATION_ARGS_VALIDATION_REF
	);
	if (validOperation) {
		let operations = Object.keys(transformedArgs);
		let operation = operations[0];
		let operationArgs = transformedArgs[operations[0]];
		return performOperation(operation, operationArgs, envVars, fsModules);
	}
	return "PLEASE ENTER VALID INPUT";
};

exports.handleOperation = handleOperation;
