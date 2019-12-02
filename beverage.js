const handleOperation = require("./src/handleOperation").handleOperation;

const transactionOperation = process.argv.slice(2);
let operationOutput = handleOperation(transactionOperation);
console.log(operationOutput);
