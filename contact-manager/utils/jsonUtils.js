const JSONToObjectArray = (json) => {
  try {
    const parsedJSON = JSON.parse(json);
    return parsedJSON;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
const ObjectArrayToJSON = (objectArray) => {
  try {
    const stringifiedObjectArray = JSON.stringify(objectArray);
    return stringifiedObjectArray;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = { JSONToObjectArray, ObjectArrayToJSON };
