const fs = require("fs");
const createFile = fs.writeFileSync;
const readFile = fs.readFileSync;
const writeFile = fs.writeFileSync;

exports.createFile = createFile;
exports.readFile = readFile;
exports.writeFile = writeFile;
