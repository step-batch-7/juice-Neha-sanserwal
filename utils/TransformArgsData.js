const assignOperationParameters = function(operationParams, OperationArgs) {
  for (let index = 0; index < operationParams.length; index += 2) {
    if (operationParams[index + 1]) {
      let key = operationParams[index];
      let value = operationParams[index + 1];
      OperationArgs[key] = value;
    }
  }

  return OperationArgs;
};

const transformArgsData = function(transactionOperation) {
  let formatedOperations = {};
  let OperationArgs = {
    "--beverage": "",
    "--empId": "",
    "--quantity": ""
  };
  let operation = transactionOperation[0];
  if (operation) {
    formatedOperations[operation] = transactionOperation.slice(1);
    formatedOperations[operation] = assignOperationParameters(
      formatedOperations[operation],
      OperationArgs
    );
  }
  return formatedOperations;
};

exports.transformArgsData = transformArgsData;
exports.assignOperationParameters = assignOperationParameters;
