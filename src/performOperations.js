const {
	getTransactions,
	updateTransactions
} = require("../utils/handleTransactionScript");
const query = require("./getEmployeeTransaction").getEmployeeTransaction;
const save = require("./addEmployeeTransaction").addEmployeeTransaction;
const { arrangeOutputFormat } = require("./arrangeOutputFormat");

const performSaveOperation = function(operationArgs, envVars, fsModules) {
	let updatedTransactions = save(
		operationArgs,
		getTransactions,
		envVars,
		fsModules
	);
	updateTransactions(updatedTransactions, fsModules, envVars);
	let entryAdded = updatedTransactions.slice(-1);
	return arrangeOutputFormat(entryAdded).transactionsHistory;
};

const performQueryOperation = function(operationArgs, envVars, fsModules) {
	let queryResult = query(operationArgs, getTransactions, envVars, fsModules);
	let transactions = arrangeOutputFormat(queryResult).transactionsHistory;
	let totalJuices = arrangeOutputFormat(queryResult).totalQuantity;
	let totalJuicesPostfix = (totalJuices == 1 && "Juice") || "Juices";
	let footer = `Total: ${totalJuices} ${totalJuicesPostfix}`;
	transactions.push(footer);
	return transactions.join("\n");
};

module.exports = {
	performQueryOperation: performQueryOperation,
	performSaveOperation: performSaveOperation
};
