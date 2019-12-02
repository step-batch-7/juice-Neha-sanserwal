const { pathFinder, getTodayDate } = require("./src/config");
const handleOperation = require("./src/handleOperation").handleOperation;

const transactionOperation = process.argv.slice(2);
const path = pathFinder(process.env);
const todayDate = getTodayDate(process.env);

let operationOutput = handleOperation(transactionOperation, path, todayDate);
console.log(operationOutput);
