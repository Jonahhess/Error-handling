const parseAdd = (args) => {
  const [name, email, phone] = args;
  try {
    //validateName(name);
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
  //   try {
  //     validateName(name);
  //   } catch (err) {
  //     console.error("Could not parse arguments for search function");
  //     throw err;
  //   }
  return name;
};

// const validateName = (name) => {
//   return true; // so far all names are true
// };

const validateEmail = (email) => {
  const validEmail = email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if (!validEmail) {
    throw new Error("Invalid email");
  }

  return validEmail;
};

const validatePhone = (phone) => {
  const validPhone = /^\d+$/.test(phone);
  if (!validPhone) {
    throw new Error("Invalid Phone Number");
  }
  return validPhone;
};

module.exports = { parseAdd, parseDelete, parseSearch };
