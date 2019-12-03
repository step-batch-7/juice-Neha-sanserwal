const fs = require("fs");
const fsModules = {
	createFile: fs.writeFileSync,
	readFile: fs.readFileSync,
	writeFile: fs.writeFileSync,
	doesFileExist: fs.existsSync
};
exports.fsModules = fsModules;
