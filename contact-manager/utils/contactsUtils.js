
// change to the better version
const findAllContactsByName = (contacts, searchName) =>
    contacts.filter(c => {
        searchName = searchName.toLowerCase();
        const contactName = c.name.toLowerCase();
        const [contactFirstName, contactLastName] = contactName.split(" ");
        return ([contactName, contactFirstName, contactLastName].includes(searchName));
    });

const objectArrayToMap = (objArr) => {
    const map = new Map();
    objArr.forEach(contact => {
        map.set(contact.email, contact);
    });
    return map;
};

const mapToObjectArray = (map) => Array.from(map.values());;

export default { findAllContactsByName, objectArrayToMap, mapToObjectArray };