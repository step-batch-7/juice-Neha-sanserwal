const pathFinder = function(env) {
	return (
		(env.hasOwnProperty("juicePath") && env.juicePath) ||
		"./transactions.json"
	);
};

exports.path = pathFinder(process.env);

exports.getTodayDate = function() {
	return process.env.stubbedDate || new Date().toJSON();
};
