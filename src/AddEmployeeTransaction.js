const { createFile, readFile } = require("../utils/fileIO");

const addEmployeeTransaction = function(
	operationArgs,
	date,
	getTransactions,
	path
) {
	const transactions = getTransactions(createFile, readFile, path);
	const transactionsDetails = formatTransactionDetails(
		operationArgs["empId"],
		operationArgs["beverage"],
		operationArgs["qty"],
		date
	);
	transactions.push(transactionsDetails);
	return transactions;
};

const formatTransactionDetails = function(
	empId,
	beverage,
	quantity,
	todayDate
) {
	let formatedDetails = {
		empId: empId,
		beverage: beverage,
		quantity: quantity,
		date: todayDate
	};
	return formatedDetails;
};

exports.addEmployeeTransaction = addEmployeeTransaction;
