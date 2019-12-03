const getTransactions = function(fsModules, envVars) {
	!fsModules.doesFileExist(envVars.path) &&
		fsModules.createFile(envVars.path, "[]", envVars.encoding);
	let transactions = fsModules.readFile(envVars.path, envVars.encoding);
	transactions = JSON.parse(transactions);
	return transactions;
};

const updateTransactions = function(transactions, fsModules, envVars) {
	!fsModules.doesFileExist(envVars.path) &&
		fsModules.createFile(envVars.path, "[]", envVars.encoding);
	transactions = JSON.stringify(transactions);
	fsModules.writeFile(envVars.path, transactions, envVars.encoding);
};

exports.getTransactions = getTransactions;
exports.updateTransactions = updateTransactions;
