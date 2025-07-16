import fs from "fs";
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

export default { readFromFile, overwriteFile };
