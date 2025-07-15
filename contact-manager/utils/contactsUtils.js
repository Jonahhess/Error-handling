
// change to the better version
const findAllContactsByName = (contacts, searchName) =>
    contacts.filter(c => {
        searchName = searchName.toLowerCase();
        const contactName = c.name.toLowerCase();
        const [contactFirstName, contactLastName] = contactName.split(" ");
        return ([contactName, contactFirstName, contactLastName].includes(searchName));
    });

const objectArrayToMap = (objArr) => {
    const objArr = new Map();
    if (contacts.length === 0) return objArr;
    contacts.forEach(contact => {
        objArr.set(contact.email, contact);
    });
    return objArr;
};
const mapToObjectArray = (map) => Array.from(map.values());;

module.exports = { findAllContactsByName, objectArrayToMap, mapToObjectArray };