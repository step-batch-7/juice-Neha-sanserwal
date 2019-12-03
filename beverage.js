const { pathFinder, getTodayDate, getEncoding } = require("./src/config");
const { handleOperation } = require("./src/handleOperation");
const { fsModules } = require("./utils/fileIO");
const transactionOperation = process.argv.slice(2);
const envVars = {
	path: pathFinder(process.env),
	date: getTodayDate(process.env),
	encoding: getEncoding
};

let operationOutput = handleOperation(transactionOperation, envVars, fsModules);
console.log(operationOutput);
