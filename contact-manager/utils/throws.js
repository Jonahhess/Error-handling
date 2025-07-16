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

export default { throwIfNotEqual, throwIfNaN, throwIfLessThan };
