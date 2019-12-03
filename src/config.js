const pathFinder = function(env) {
	return (
		(env.hasOwnProperty("juicePath") && env.juicePath) ||
		"./transactions.json"
	);
};

const getTodayDate = function(env) {
	return env.stubbedDate || new Date().toJSON();
};

const getEncoding = function(env) {
	return env.stubbedEncoding || "utf8";
};

module.exports = {
	pathFinder: pathFinder,
	getTodayDate: getTodayDate,
	getEncoding: getEncoding
};
