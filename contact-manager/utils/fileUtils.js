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
const AppendToFile = (fileName, data) => {
  try {
    fs.writeFileSync(fileName, data, { flag: "a" });
    // file written successfully
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const OverwriteFile = (fileName, data) => {
  try {
    fs.writeFileSync(fileName, data);
    // file written successfully
  } catch (err) {
    console.error(err);
    throw err;
  }
};
