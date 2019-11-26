const transformArgsData = require("./utils/TransformArgsData")
  .transformArgsData;
const operationRef = require("./utils/constants").OPERATION;
const valiadteArgs = require("./src/validateArgs").valiadteArgs;

const transactionOperation = process.argv.slice(2);
let transformedArgs = transformArgsData(transactionOperation);

if (valiadteArgs(transformedArgs)) {
  let operations = Object.keys(transformedArgs);
  let operation = operations[0];
  let operationArgs = transformedArgs[operations[0]];
  let beverage = operationArgs["--beverage"];
  let empId = operationArgs["--empId"];
  let quantity = operationArgs["--quantity"];

  console.log(operationRef[operation](empId, beverage, quantity));
}
