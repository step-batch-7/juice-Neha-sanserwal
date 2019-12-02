const { createFile, readFile } = require("../utils/fileIO");

const changeDateFormat = date => {
	return date.slice(0, 10);
};
const hasKeyAndValue = (transaction, key, value) => {
	let transactionValue = transaction[key];
	if (key === "date") {
		transactionValue = changeDateFormat(transaction[key]);
	}
	return transaction.hasOwnProperty(key) && transactionValue === value;
};

const matchingTransaction = (queryArgs, transaction) => {
	let isPresent = true;
	for (let [key, value] of Object.entries(queryArgs)) {
		isPresent = isPresent && hasKeyAndValue(transaction, key, value);
	}
	return isPresent;
};

const getEmployeeTransaction = (queryArgs, getTransactions) => {
	let transactions = getTransactions(createFile, readFile);
	let transactionsHistory = [];
	transactions.forEach(transaction => {
		let isTransactionMatched = matchingTransaction(queryArgs, transaction);
		isTransactionMatched && transactionsHistory.push(transaction);
	});
	return transactionsHistory;
};

exports.getEmployeeTransaction = getEmployeeTransaction;
exports.matchingTransaction = matchingTransaction;
