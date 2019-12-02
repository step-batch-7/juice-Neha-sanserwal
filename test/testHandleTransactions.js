const getTransaction = require("../utils/handleTransactionScript")
	.getTransactions;
const updateTransactions = require("../utils/handleTransactionScript")
	.updateTransactions;
const searchEmployeeTransactions = require("../utils/handleTransactionScript")
	.searchEmployeeTransactions;
const assert = require("assert");

describe("getTransactions", function() {
	const createFile = function(path, data, encoding) {
		assert.strictEqual(path, "./transactions.json");
		assert.deepStrictEqual(data, `[]`);
		assert.strictEqual(encoding, "utf8");
		return true;
	};
	const createFileIfNotPresent = function(path, createFile) {
		assert.strictEqual(path, "./transactions.json");
		return;
	};
	const readFile = function(path, encoding) {
		assert.strictEqual(path, "./transactions.json");
		assert.strictEqual(encoding, "utf8");
		return "[]";
	};
	it("should get all the data form give json file", function() {
		assert.deepStrictEqual(
			getTransaction(createFileIfNotPresent, readFile),
			[]
		);
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
	it("should update the file with the values provided", function() {
		assert.strictEqual(
			updateTransactions({ a: "a" }, createFile, writeFile),
			undefined
		);
	});
});
