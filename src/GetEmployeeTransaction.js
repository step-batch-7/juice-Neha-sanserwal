const createFile = require("../utils/fileIO").createFile;
const readFile = require("../utils/fileIO").readFile;

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
	for (transaction of transactions) {
		if (matchingTransaction(queryArgs, transaction)) {
			transactionsHistory.push(transaction);
		}
	}
	return transactionsHistory;
};

exports.getEmployeeTransaction = getEmployeeTransaction;
exports.matchingTransaction = matchingTransaction;
