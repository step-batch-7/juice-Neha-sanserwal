const isValidKeyValue = function(key, operationArgs, argsValidationRef) {
	return argsValidationRef[key] && argsValidationRef[key](operationArgs[key]);
};
const validateArgs = function(operationArgs, argsValidationRef, validArgLen) {
	let isValidArg = validArgLen;
	for (key in operationArgs) {
		isValidArg =
			isValidArg &&
			isValidKeyValue(key, operationArgs, argsValidationRef);
	}
	return isValidArg;
};
const validateSaveOperation = function(operationArgs, argsValidationRef) {
	let keys = Object.keys(operationArgs);
	let isValidArgsLen = keys.length === 3;
	return validateArgs(operationArgs, argsValidationRef, isValidArgsLen);
};

const validateQueryOperation = function(operationArgs, argsValidationRef) {
	let keys = Object.keys(operationArgs);
	let isValidArgsLen = keys.length > 0;
	return validateArgs(operationArgs, argsValidationRef, isValidArgsLen);
};
const operationValidaionRefs = {
	"--save": validateSaveOperation,
	"--query": validateQueryOperation
};

const validateOperation = function(transformedArgs, argsValidationRef) {
	let operation = Object.keys(transformedArgs)[0];
	let isValidOperation = operation;
	let operationArgs = transformedArgs[operation];
	argsValidationRef = argsValidationRef[operation];
	return (
		isValidOperation &&
		operationValidaionRefs[operation](operationArgs, argsValidationRef)
	);
};

exports.validateOperation = validateOperation;
