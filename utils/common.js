const isString = function(string) {
  return string !== "" && typeof string === "string";
};

const isNum = function(num) {
  num = parseInt(num);
  return num > 0 && Number.isInteger(num);
};
const isValidDate = function(date) {
  const dateRegx = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
  return dateRegx.test(date);
};

const getTodayDate = function() {
  return process.env.stubbedDate || new Date().toJSON();
};
module.exports = {
  isString: isString,
  isNum: isNum,
  getTodayDate: getTodayDate,
  isValidDate: isValidDate
};
