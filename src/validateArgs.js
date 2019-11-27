const argValidationRefs = require("../utils/constants").ARGS_VALIDATION_REF;
const argKeys = require("../utils/constants").OPERATION_ARGS_KEYS;
const isArgKeyValid = function(key) {
  return argKeys.includes(key);
};
const isArgValueValid = function(key, argValue) {
  if (argValidationRefs[key]) {
    return argValidationRefs[key](argValue);
  }
  return false;
};
const isArgValid = function(key, argValue) {
  return isArgKeyValid(key) && isArgValueValid(key, argValue);
};
const hasValidSaveArgs = function(transactionArgs, operation) {
  let isOperationValid = operation === "--save";
  for (key in transactionArgs) {
    let argValue = transactionArgs[key];
    isOperationValid = isOperationValid && isArgValid(key, argValue);
  }
  return isOperationValid;
};

const hasValidQueryArgs = function(transactionArgs, operation) {
  let isOperationValid = operation === "--query";
  let argValue = transactionArgs["--empId"];
  return isOperationValid && isArgValid("--empId", argValue);
};

const valiadteArgs = function(transformedArgs) {
  let operation = Object.keys(transformedArgs)[0];
  return (
    hasValidSaveArgs(transformedArgs[operation], operation) ||
    hasValidQueryArgs(transformedArgs[operation], operation)
  );
};

exports.valiadteArgs = valiadteArgs;
exports.hasValidQueryArgs = hasValidQueryArgs;
exports.hasValidSaveArgs = hasValidSaveArgs;
