const addEmployeeTransaction = function(
	operationArgs,
	getTransactions,
	envVars,
	fsModules
) {
	const transactions = getTransactions(fsModules, envVars);
	const transactionsDetails = formatTransactionDetails(
		operationArgs["empId"],
		operationArgs["beverage"],
		operationArgs["qty"],
		envVars.date
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
