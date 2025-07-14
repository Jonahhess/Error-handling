const fs = require("node:fs");

const readFromFile = (fileName) => {
  try {
    const data = fs.readFileSync(fileName, "utf8");
    return data;
  } catch (err) {
    console.error(err);
  }
};
const AppendToFile = (fileName, data) => {
  try {
    fs.writeFileSync(fileName, data, { flag: "a" });
    // file written successfully
  } catch (err) {
    console.error(err);
  }
};
const isExistingFile = (fileName) => 0;
const createNewFile = (fileName) => 0;
// const deleteFile = (fileName) => 0;
