// ES6 export (keep for reference):
// export default { throwIfNotEqual, throwIfNaN, throwIfLessThan };

const throwIfNotEqual = (a, b, errorMsg) => {
  if (a !== b) {
    throw new Error(errorMsg);
  }
};

const throwIfNaN = (number, errorMsg) => {
  if (Number.isNaN(number)) {
    throw new Error(errorMsg);
  }
};

const throwIfLessThan = (a, b, errorMsg) => {
  if (a < b) {
    throw new Error(errorMsg);
  }
};

// CommonJS export:
module.exports = { throwIfNotEqual, throwIfNaN, throwIfLessThan };