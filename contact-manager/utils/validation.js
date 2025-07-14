const parseAdd = (args) => 0;
const parseDelete = (args) => 0;
const parseSearch = (args) => 0;

const validateName = (name) => {
  return true; // so far all names are true
};

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validatePhone = (phone) => {
  return /^\d+$/.test(phone);
};

module.exports = { parseAdd, parseDelete, parseSearch };
