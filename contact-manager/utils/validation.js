const parseAdd = (args) => {
  const [name, email, phone] = args;
  try {
    validateName(name);
    validateEmail(email);
    validatePhone(phone);
  } catch (err) {
    console.error("Could not parse arguments for add function");
    throw err;
  }
  return [name, email, phone];
};
const parseDelete = (args) => {
  const [email] = args;
  try {
    validateEmail(email);
  } catch (err) {
    console.error("Could not parse arguments for delete function");
    throw err;
  }
  return email;
};
const parseSearch = (args) => {
  const [name] = args;
  try {
    validateName(name);
  } catch (err) {
    console.error("Could not parse arguments for search function");
    throw err;
  }
  return name;
};

const validateName = (name) => {
  if (!name) {
    throw new Error("Invalid name");
  }
};

const validateEmail = (email) => {
  const validEmail = email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if (!validEmail) {
    throw new Error("Invalid email");
  }
};

// internal fn
const throwIfNotLength = (hasLength, num, errorMsg) => {
  if (hasLength.length !== num) throw new Error(errorMsg);
};

// internal fn
const throwIfNotAllDigits = (string, errorMsg) => {
  const onlyDigitsRegex = /^\d+$/;
  if (!onlyDigitsRegex.test(string)) {
    throw new Error(errorMsg);
  }
};

// for now, only accepts phone inputs of the form 555-123-4567
const validatePhone = (phone) => {
  const errorMsg = "Invalid phone number";

  throwIfNotLength(phone, 12, errorMsg);
  const segmentsArray = phone.split("-");
  throwIfNotLength(segmentsArray, 3, errorMsg);

  for (let i = 0; i < segmentsArray.length; i++) {
    const segment = segmentsArray[i];
    throwIfNotLength(segment, 3 + Number(i === 2), errorMsg); // lazy way of writing 3,3,4
    throwIfNotAllDigits(segment);
  }
};

module.exports = { parseAdd, parseDelete, parseSearch };
