const fs = require("node:fs");

const readFromFile = (fileName) => {
  try {
    const data = fs.readFileSync(fileName, "utf8");
    return data;
  } catch (err) {
    console.error(err);
  }
};
const saveToFile = (fileName, data) => 0;
const isExistingFile = (fileName) => 0;
const createNewFile = (fileName) => 0;
// const deleteFile = (fileName) => 0;
