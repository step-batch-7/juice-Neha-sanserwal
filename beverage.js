const performOperation = require("./src/performOperation").performOperation;

const transactionOperation = process.argv.slice(2);
let operationOutput = performOperation(transactionOperation);
console.log(operationOutput);
