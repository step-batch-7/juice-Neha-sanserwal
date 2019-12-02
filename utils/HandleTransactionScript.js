const fs = require("fs");

const createFileIfNotPresent = (path, createFile) => {
	!fs.existsSync(path) && createFile(path, "[]", "utf8");
};

const getTransactions = function(createFile, readFile, path) {
	createFileIfNotPresent(path, createFile);
	let transactions = readFile(path, "utf8");
	transactions = JSON.parse(transactions);
	return transactions;
};

const updateTransactions = function(transactions, createFile, writeFile, path) {
	createFileIfNotPresent(path, createFile);
	transactions = JSON.stringify(transactions);
	writeFile(path, transactions, "utf8");
};

exports.getTransactions = getTransactions;
exports.updateTransactions = updateTransactions;
