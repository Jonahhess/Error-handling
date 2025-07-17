// ES6 import/export (keep for reference):
// import fs from "fs";
// export default { readFromFile, overwriteFile };

const fs = require("fs");
const PATH = "../contacts.json";

const readFromFile = () => {
  let data = fs.readFileSync(PATH, "utf8");
  return data;
};

const overwriteFile = (data) => {
  try {
    fs.writeFileSync(PATH, data);
    // file written successfully
  } catch (err) {
    throw err;
  }
};

// CommonJS export:
module.exports = { readFromFile, overwriteFile };