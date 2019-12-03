const addEmployeeTransaction = require("../src/addEmployeeTransaction")
	.addEmployeeTransaction;
const transactions = require("../utils/handleTransactionScript")
	.getTransactionScript;
const assert = require("assert");

describe("addEmployeeTransaction", function() {
	it("should update empId with details to transactions id it exist", function() {
		const getTransactions = function() {
			return [
				{ empId: 2, beverage: "a", quantity: 2, date: "23-11-2000" }
			];
		};
		const fsModules = {};
		const envVars = {
			path: "./transactions.json",
			date: "2001-01-22",
			encoding: "utf8"
		};
		let expected = [
			{ empId: 2, beverage: "a", quantity: 2, date: "23-11-2000" },
			{ empId: 2, beverage: "Orange", quantity: 1, date: "2001-01-22" }
		];
		let operationArgs = {
			empId: 2,
			beverage: "Orange",
			qty: 1
		};
		assert.deepStrictEqual(
			addEmployeeTransaction(
				operationArgs,
				getTransactions,
				envVars,
				fsModules
			),
			expected
		);
	});
	it("should update empId with details to transactions id it exist", function() {
		const getTransactions = function(fsModules) {
			return [];
		};
		const fsModules = {};
		const envVars = {
			path: "./transactions.json",
			date: "2001-01-22",
			encoding: "utf8"
		};
		let expected = [
			{ empId: 2, beverage: "a", quantity: 1, date: "2001-01-22" }
		];
		let operationArgs = {
			empId: 2,
			beverage: "a",
			qty: 1
		};
		assert.deepStrictEqual(
			addEmployeeTransaction(
				operationArgs,
				getTransactions,
				envVars,
				fsModules
			),
			expected
		);
	});
});
