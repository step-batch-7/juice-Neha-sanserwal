const ArgValidationRefs = require("../utils/constants").ARGS_VALIDATION_REF;

const hasValidSaveArgs = function(transactionArgs, operation) {
  let isOperationValid = operation === "--save";
  for (key in transactionArgs) {
    let argValue = transactionArgs[key];
    isOperationValid = isOperationValid && ArgValidationRefs[key](argValue);
  }
  return isOperationValid;
};

const hasValidQueryArgs = function(transactionArgs, operation) {
  let isOperationValid = operation === "--query";
  let argValue = transactionArgs[key];
  return isOperationValid && ArgValidationRefs["--empId"](argValue);
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
