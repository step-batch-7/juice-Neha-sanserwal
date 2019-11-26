const isString = function(string) {
  return string !== "" && typeof string === "string";
};

const isNum = function(num) {
  num = parseInt(num);
  return Number.isInteger(num);
};
const getTodayDate = function() {
  date = new Date();
  return JSON.parse(date);
};
exports.isString = isString;
exports.isNum = isNum;
exports.getTodayDate = getTodayDate;
