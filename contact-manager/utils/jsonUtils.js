const JSONToObjectArray = (json) => {
    try {
        const parsedJSON = JSON.parse(json);
        if (!Array.isArray(parsedJSON) || !parsedJSON.every(obj => typeof obj === "object"))
            throw new Error("invalid json");
        return parsedJSON;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const ObjectArrayToJSON = (objectArray) => {
    try {
        if (!Array.isArray(objectArray) || !objectArray.every(obj => typeof obj === "object"))
            throw new Error("invalid json");
        const stringifiedObjectArray = JSON.stringify(objectArray);
        return stringifiedObjectArray;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// ES6 export (keep for reference):
// export default { JSONToObjectArray, ObjectArrayToJSON };

// CommonJS export:
module.exports = { JSONToObjectArray, ObjectArrayToJSON };
