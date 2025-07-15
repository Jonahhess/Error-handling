const filesUtils = require('../utils/fileUtils');
const contactsUtils = require('../utils/contactsUtils');
class ContactService {

    // !!!!!!! send to add and delete the db file-name or save in this file

    load(fileName) {
        const json = fs.readFileSync(fileName); // add try catch for reading the file
        return json
    }

    // error handling:
    // 1. handle empty arr
    // 2. handle writing to the file went wrong
    add(name, email, phone, parsedData, fileName) {
        const contactsMap = contactsUtils.objectArrayToMap(parsedData);
        if (contactsMap.has(email)) return "Error: Contact with this email already exists";
        const newContact = { name, email, phone }
        parsedData.push(newContact);
        filesUtils.overwriteFile(fileName, parsedData); // add try catch for successful writing
        return name;// on success - return contact name and contacts length
    }

    // error handling:
    // 1. handle writing to the file went wrong
    delete(email, parsedData, fileName) {
        let contactsMap = contactsUtils.objectArrayToMap(parsedData);
        const contactToDelete = contactsMap.get(email);
        if (!contactToDelete) {
            return console.log("Error: No contact found with email: " + email); //throw error
        }
        const updatedData = contactsUtils.mapToObjectArray(contactsMap);
        filesUtils.overwriteFile(fileName, updatedData); // try catch
        return contactToDelete.name; // on success - return contact name and contacts length
    }

    list() {
        const contacts = this.load();
        return contacts;
    }

    search(name, contacts) {
        const contactsByName = contactsUtils.findAllContactsByName(contacts, name);
        return contactsByName;
    }

}
const contactService = new ContactService()
let contact = ['jonah hess', 'aaa', '123345'];
let res = contactService.add(contact);
console.log(res);
console.log(contactService.list());
console.log(contactService.search('glikm'));
// let deleted = contactService.delete('aaa');
// console.log(deleted);


// export default ContactService();