import fs from "node:fs";
// const PATH = "../DB/contacts.json";
const PATH = "../DB/test.json";

const readFromFile = () => {
    let data;
    try {
        data = fs.readFileSync(PATH, "utf8");
    } catch (err) {
        // if file not found - create a new empty one
        console.error(err);
    }
    return data;
}


const appendToFile = (data) => {
    try {
        fs.writeFileSync(PATH, data, { flag: "a" });
        // file written successfully
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const overwriteFile = (data) => {
    try {
        fs.writeFileSync(PATH, data);
        // file written successfully
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export default { readFromFile, appendToFile, overwriteFile };
