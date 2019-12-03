const { transformArgsData } = require("../utils/transformArgsData");
const { OPERATIONS } = require("../utils/constants");
const { validateOperation } = require("./validateOperation");
const { HEADER } = require("../utils/constants");
const { OPERATION_ARGS_VALIDATION_REF } = require("../utils/constants");

const performOperation = function(
	operation,
	operationArgs,
	envVars,
	fsModules
) {
	let endResult = OPERATIONS[operation](operationArgs, envVars, fsModules);
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
