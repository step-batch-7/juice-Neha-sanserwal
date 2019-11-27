const isString = function(string) {
  return string !== "" && typeof string === "string";
};

const isNum = function(num) {
  num = parseInt(num);
  return num > 0 && Number.isInteger(num);
};
const getTodayDate = function() {
  return new Date().toJSON();
};
exports.isString = isString;
exports.isNum = isNum;
exports.getTodayDate = getTodayDate;
