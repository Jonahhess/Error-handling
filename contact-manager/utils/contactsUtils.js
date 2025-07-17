// ES6 import/export (keep for reference):
// export default { findAllContactsByName, objectArrayToMap, mapToObjectArray };

const findAllContactsByName = (contacts, query) => {
  const queryArr = query.split(" ");
  return contacts.filter((c) => queryArr.every((q) => c.name.includes(q)));
};

const objectArrayToMap = (objArr) => {
  const map = new Map();
  objArr.forEach((contact) => {
    map.set(contact.email, contact);
  });
  return map;
};

const mapToObjectArray = (map) => Array.from(map.values());

// CommonJS export:
module.exports = { findAllContactsByName, objectArrayToMap, mapToObjectArray };