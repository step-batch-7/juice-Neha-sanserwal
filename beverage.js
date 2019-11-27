const performOperation = require("./src/performOperation").performOperation;
const header = require("./utils/constants").HEADER;
const transactionOperation = process.argv.slice(2);
let operationOutput = performOperation(transactionOperation);
console.log(header + operationOutput);
