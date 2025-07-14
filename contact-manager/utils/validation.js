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
const parseDelete = (args) => 0;
const parseSearch = (args) => 0;

const validateName = (name) => {
  return true; // so far all names are true
};

const validateEmail = (email) => {
  return (
    email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) || Error("Invalid Email")
  );
};

const validatePhone = (phone) => {
  return /^\d+$/.test(phone) || Error("Invalid Phone Number");
};

module.exports = { parseAdd, parseDelete, parseSearch };
