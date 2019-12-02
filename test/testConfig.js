const assert = require("assert");
const { pathFinder, getTodayDate } = require("../src/config");
describe("pathFinder", function() {
	it("should give stubbed path if it is given", function() {
		const env = { juicePath: "sample.json" };
		assert.strictEqual(pathFinder(env), "sample.json");
	});
	it("should give default path if stubbed path is not given", function() {
		const env = {};
		assert.strictEqual(pathFinder(env), "./transactions.json");
	});
});

describe("getTodayDate", function() {
	it("should give stubbed date if it is given", function() {
		const env = { stubbedDate: "1970-01-01T00:00:01.877Z" };
		assert.strictEqual(getTodayDate(env), "1970-01-01T00:00:01.877Z");
	});
	it("should give default path if stubbed date is not given", function() {
		const env = {};
		const date = new Date().toJSON();
		assert.strictEqual(getTodayDate(env), date);
	});
});
