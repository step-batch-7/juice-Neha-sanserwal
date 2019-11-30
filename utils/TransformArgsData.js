const assignOperationParameters = function(operationParams) {
	let operationArgs = {};
	for (let index = 0; index < operationParams.length; index += 2) {
		let key = operationParams[index].slice(2);
		let value = operationParams[index + 1];
		operationArgs[key] = value;
	}

	return operationArgs;
};

const transformArgsData = function(transactionOperation) {
	let formatedOperations = {};
	let operation = transactionOperation[0];
	if (operation) {
		formatedOperations[operation] = transactionOperation.slice(1);
		formatedOperations[operation] = assignOperationParameters(
			formatedOperations[operation]
		);
	}
	return formatedOperations;
};

exports.transformArgsData = transformArgsData;
exports.assignOperationParameters = assignOperationParameters;
