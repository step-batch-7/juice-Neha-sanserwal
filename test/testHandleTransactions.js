const getTransaction = require("../utils/handleTransactionScript")
	.getTransactions;
const updateTransactions = require("../utils/handleTransactionScript")
	.updateTransactions;
const assert = require("assert");
describe("getTransactions", function() {
	const createFile = function(path, data, encoding) {
		assert.strictEqual(path, "./transactions.json");
		assert.deepStrictEqual(data, `[]`);
		assert.strictEqual(encoding, "utf8");
		return true;
	};
	const doesFileExist = function(path) {
		assert.strictEqual(path, "./transactions.json");
		return false;
	};
	const readFile = function(path, encoding) {
		assert.strictEqual(path, "./transactions.json");
		assert.strictEqual(encoding, "utf8");
		return "[]";
	};
	const fsModules = {
		doesFileExist: doesFileExist,
		createFile: createFile,
		readFile: readFile
	};
	const envVars = {
		path: "./transactions.json",
		date: "2001-01-22",
		encoding: "utf8"
	};
	it("should get all the data from given json file", function() {
		assert.deepStrictEqual(getTransaction(fsModules, envVars), []);
	});
});

describe("updateTransactions", function() {
	const createFile = function(path, data, encoding) {
		assert.strictEqual(path, "./transactions.json");
		assert.deepStrictEqual(data, `[]`);
		assert.strictEqual(encoding, "utf8");
		return true;
	};
	const writeFile = function(path, data, encoding) {
		assert.strictEqual(path, "./transactions.json");
		assert.deepStrictEqual(data, `{"a":"a"}`);
		assert.strictEqual(encoding, "utf8");
		return true;
	};
	const doesFileExist = function(path) {
		return false;
	};
	const fsModules = {
		createFile: createFile,
		writeFile: writeFile,
		doesFileExist: doesFileExist
	};
	const envVars = {
		path: "./transactions.json",
		date: "2001-01-22",
		encoding: "utf8"
	};
	it("should update the file with the values provided", function() {
		assert.strictEqual(
			updateTransactions({ a: "a" }, fsModules, envVars),
			undefined
		);
	});
});
