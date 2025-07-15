import fs from 'fs';

class ContactService {

    controller() {

    }

    dbAddress = '../DB/contacts.json';

    // error handling:
    // 1. no file found - create a new one with empty arr and return a notice
    // 2. file found but empty - return empty arr
    load() {
        const data = fs.readFileSync(this.dbAddress); // add try catch for reading the file
        return JSON.parse(data);
        // if no file found - throw error and return create new empty arr
    }

    // error handling:
    // 1. handle empty arr
    // 2. handle writing to the file went wrong
    add(argsArr) {
        const contactsData = this.load();
        const contactsMap = this.#convertDataToMap(contactsData);
        const [name, email, phone] = argsArr; // add input validation
        if(contactsMap.has(email)) return "Error: Contact with this email already exists";
        const newContact = { name, email, phone }
        contactsData.push(newContact);
        this.#writeUpdatedFileSync(contactsData); // add try catch for successful writing
        return name;// on success - return contact name and contacts length
    }

    // error handling:
    // 1. handle writing to the file went wrong
    delete(email) {
        let contactsData = this.load();
        let contactsMap = this.#convertDataToMap(contactsData);
        const contactToDelete = contactsMap.get(email);
        if (!contactToDelete) {
            return console.log("Error: No contact found with email: " + email); //throw error
        }
        const deleted = contactsMap.delete(email);
        contactsData = this.#convertMapToArr(contactsMap);
        this.#writeUpdatedFileSync(contactsData); // try catch
        return contactToDelete.name; // on success - return contact name and contacts length
    }

    list() {
        const contacts = this.load();
        return contacts;
    }

    search(name) {
        const contacts = this.load();
        const contactsByName = this.#findContactsByName(contacts, name);
        return contactsByName;
    }

    #convertDataToMap(contacts) {
        const contactsMap = new Map();
        if (contacts.length === 0) return contactsMap;
        contacts.forEach(contact => {
            contactsMap.set(contact.email, contact);
        });
        return contactsMap;
    }

    #convertMapToArr(map) {
        return Array.from(map.values());
    }

    #writeUpdatedFileSync(dataArr) {
        fs.writeFileSync(this.dbAddress, JSON.stringify(dataArr), 'utf8');
    }

    #findContactsByName(contacts, searchName) {
        return contacts.filter(c => {
            searchName = searchName.toLowerCase();
            const contactName = c.name.toLowerCase();
            const [contactFirstName, contactLastName] = contactName.split(" ");
            return ([contactName, contactFirstName, contactLastName].includes(searchName));
        });
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