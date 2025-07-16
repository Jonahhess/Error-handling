const filesUtils = require('../utils/fileUtils');
const jsonUtils = require('../utils/jsonUtils');
const contactsUtils = require('../utils/contactsUtils');
const fs = require('node:fs');
class ContactService {

    load() {
        const json = filesUtils.readFromFile();
        if (!json) filesUtils.overwriteFile('[]');
        const parsedData = jsonUtils.JSONToObjectArray(json || '[]');
        return { parsedData, createdNewArr: !!json };
    }

    save(parsedData) {
        const json = jsonUtils.ObjectArrayToJSON(parsedData);
        filesUtils.overwriteFile(json);
    }

    // error handling:
    // 1. handle empty arr
    // 2. handle writing to the file went wrong
    add(name, email, phone, parsedData) {
        const contactsMap = contactsUtils.objectArrayToMap(parsedData);
        if (contactsMap.has(email))
            throw new Error("✗ Error: Contact with this email already exists");
        const newContact = { name, email, phone }
        parsedData.push(newContact);
        return [name, parsedData];
    }

    // error handling:
    // 1. handle writing to the file went wrong
    delete(email, parsedData) {
        let contactsMap = contactsUtils.objectArrayToMap(parsedData);
        const contactToDelete = contactsMap.get(email);
        if (!contactToDelete)
            throw new Error("✗ Error: No contact found with email: " + email);
        const updatedData = contactsUtils.mapToObjectArray(contactsMap);
        return [contactToDelete.name, updatedData]; // on success - return contact name and contacts length
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

export default ContactService();