const { isString, isNum, isValidDate } = require("../utils/common");
const assert = require("assert");
describe("isString", function() {
	it("should return true if the parameter is string", function() {
		assert.ok(isString("a"));
	});
	it("should return false if the parameter is not a string", function() {
		assert.ok(!isString(1));
	});
});

describe("isNum", function() {
	it("should return true if argument is number", function() {
		assert.ok(isNum("2"));
	});
	it("should return false if argument is not number", function() {
		assert.ok(!isNum("a"));
	});
});

describe("isValidDate", function() {
	it("should validate if data is valid date", function() {
		assert.ok(isValidDate("2000-1-1"));
	});
	it("shouldn't validate if data is not a valid date", function() {
		assert.ok(!isValidDate("200-1-1"));
	});
});
