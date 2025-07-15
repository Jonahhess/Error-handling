const throwIfNotEqual = (a, b, errorMsg) => {
  if (a !== b) {
    throw new Error(errorMsg);
  }
};

const throwIfNaN = (string, errorMsg) => {
  if (Number.isNaN(Number.parseInt(string))) {
    throw new Error(errorMsg);
  }
};

module.exports = { throwIfNotEqual, throwIfNaN };
