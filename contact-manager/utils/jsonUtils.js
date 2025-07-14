const JSONToObjectArray = (json) => JSON.parse(json);
const ObjectArrayToJSON = (objectArray) => JSON.stringify(objectArray);

module.exports = { JSONToObjectArray, ObjectArrayToJSON };
