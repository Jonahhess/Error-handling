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

// for now, only accepts phone inputs of the form 555-123-4567
const validatePhone = (phone) => {
  if (!/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
    throw new Error("Invalid phone number");
  }
};

const validateQuery = (query) => {
  if (!query || /^.*?(?=[\^#%&$\*:<>\?/\{\|\}]).*$/.test(query)) {
    throw new Error("Invalid name");
  }
};

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
  const [query] = args;
  try {
    validateQuery(query);
  } catch (err) {
    console.error("Could not parse arguments for search function");
    throw err;
  }
  return query;
};

module.exports = { parseAdd, parseDelete, parseSearch };
