const saveArgValidationRefs = require(../utils/constants)
  .SAVE_ARGS_VALIDATION_REF;
const queryArgValidationRefs = require(../utils/constants)
  .QUERY_ARGS_VALIDATION_REF;
const argKeys = require(../utils/constants).OPERATION_ARGS_KEYS;
const queryArgs = require(../utils/constants).QUERY_ARGS;

const isArgKeyValid = function(key) {
  return argKeys.includes(key);
};

const isArgValueValid = function(key, argValue, argValidationRefs) {
  if (argValidationRefs[key]) {
    return argValidationRefs[key](argValue);
  }
  return false;
};

const isArgValid = function(key, argValue, argValidationRefs) {
  return (
    isArgKeyValid(key) && isArgValueValid(key, argValue, argValidationRefs)
  );
};

const hasValidSaveArgs = function(transactionArgs, operation) {
  let isOperationValid = operation === --save;
  for (key in transactionArgs) {
    let argValue = transactionArgs[key];
    isOperationValid =
      isOperationValid && isArgValid(key, argValue, saveArgValidationRefs);
  }
  return isOperationValid;
};

const hasValidQueryArgs = function(transactionArgs, operation) {
  let isOperationValid = operation === --query;
  for (key in queryArgs) {
    queryArgs[key] = transactionArgs[key];
  }
  for (key in queryArgs) {
    let argValue = queryArgs[key];
    isOperationValid =
      isOperationValid || isArgValid(key, argValue, queryArgValidationRefs);
  }
  return isOperationValid;
};

const valiadteArgs = function(transformedArgs) {
  let operation = Object.keys(transformedArgs)[0];
  console.log(transformedArgs);
  return (
    hasValidSaveArgs(transformedArgs[operation], operation) ||
    hasValidQueryArgs(transformedArgs[operation], operation)
  );
};

exports.valiadteArgs = valiadteArgs;
exports.hasValidQueryArgs = hasValidQueryArgs;
exports.hasValidSaveArgs = hasValidSaveArgs;

