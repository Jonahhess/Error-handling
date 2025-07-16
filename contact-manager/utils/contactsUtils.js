// change to the better version
const findAllContactsByName = (contacts, query) =>
  //
  {
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

export default { findAllContactsByName, objectArrayToMap, mapToObjectArray };
