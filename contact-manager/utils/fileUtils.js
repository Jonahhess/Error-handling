const fs = require("node:fs");

const readFromFile = (fileName) => {
  try {
    const data = fs.readFileSync(fileName, "utf8");
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
const appendToFile = (fileName, data) => {
  try {
    fs.writeFileSync(fileName, data, { flag: "a" });
    // file written successfully
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const overwriteFile = (fileName, data) => {
  try {
    fs.writeFileSync(fileName, data);
    // file written successfully
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = { readFromFile, appendToFile, overwriteFile };
