const assignOperationParameters = function(operationParams, operationArgs) {
  for (let index = 0; index < operationParams.length; index += 2) {
    if (operationParams[index + 1]) {
      let key = operationParams[index];
      let value = operationParams[index + 1];
      operationArgs[key] = value;
    }
  }

  return operationArgs;
};

const transformArgsData = function(transactionOperation) {
  let formatedOperations = {};
  let operationArgs = {};
  let operation = transactionOperation[0];
  if (operation) {
    formatedOperations[operation] = transactionOperation.slice(1);
    formatedOperations[operation] = assignOperationParameters(
      formatedOperations[operation],
      operationArgs
    );
  }
  return formatedOperations;
};

exports.transformArgsData = transformArgsData;
exports.assignOperationParameters = assignOperationParameters;
