const handleOperation = require("./src/performOperation").handleOperation;

const transactionOperation = process.argv.slice(2);
let operationOutput = handleOperation(transactionOperation);
console.log(operationOutput);
