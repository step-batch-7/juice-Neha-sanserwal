const isString = function(string) {
  return string !== "" && typeof string === "string";
};

const isNum = function(num) {
  num = parseInt(num);
  return Number.isInteger(num);
};

exports.isString = isString;
exports.isNum = isNum;
