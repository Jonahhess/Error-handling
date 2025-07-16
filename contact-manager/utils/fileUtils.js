const fs = require("node:fs");

const readFromFile = (fileName) => {
    let data;
    try {
        data = fs.readFileSync(fileName, "utf8");
    } catch (err) {
        // if file not found - create a new empty one
        console.error(err);
    }
    return data;
}


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
