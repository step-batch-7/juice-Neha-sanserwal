const fs = require("fs");

const createFileIfNotPresent = (path, createFile) => {
	!fs.existsSync(path) && createFile(path, "[]", "utf8");
};

const getTransactions = function(createFile, readFile) {
	createFileIfNotPresent("./transactions.json", createFile);
	let transactions = readFile("./transactions.json", "utf8");
	transactions = JSON.parse(transactions);
	return transactions;
};

const updateTransactions = function(transactions, createFile, writeFile) {
	createFileIfNotPresent("./transactions.json", createFile);
	transactions = JSON.stringify(transactions);
	writeFile("./transactions.json", transactions, "utf8");
};

exports.getTransactions = getTransactions;
exports.updateTransactions = updateTransactions;
