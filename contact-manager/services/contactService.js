import fs from 'fs';

class ContactService {

    controller() {

    }

    dbAddress = '../DB/contacts.json';

    load() {
        // add try catch for reading the file
        const data = fs.readFileSync(this.dbAddress);
        return JSON.parse(data);
        // if no file found - throw error and return create new empty arr
    }

    add(argsArr) {
        let contactsData = this.load();
        const [name, email, phone] = argsArr; // add input validation
        const newContact = { name, email, phone }
        contactsData.push(newContact);
        // let contactsMap = new Map() //map will be keyed by email
        fs.writeFileSync(this.dbAddress, JSON.stringify(contactsData), 'utf-8'); // add try catch for successful writing
        return name;// on success - return contact name
    }

    delete(email) {
        let contactsData = this.load();
        let contactsMap = this.convertDataToMap(contactsData);
        const contactToDelete = contactsMap.get(email);
        if (!contactToDelete) {
            return console.log("Error: No contact found with email: nonexistent@example.com"); //throw error
        }
        const deleted = contactsMap.delete(email);
        contactsData = this.convertMapToArr(contactsMap);
        this.writeUpdatedFileSync(contactsData); // try catch
        return contactToDelete.name;
    }

    list() {

    }

    search(name) {

    }

    convertDataToMap(contacts) {
        const contactsMap = new Map();
        if (contacts.length === 0) return contactsMap;
        contacts.forEach(contact => {
            contactsMap.set(contact.email, contact);
        });
        return contactsMap;
    }

    convertMapToArr(map) {
        return Array.from(map.value());
    }

    writeUpdatedFileSync(dataArr) {
        fs.writeFileSync(this.dbAddress, JSON.stringify(dataArr), 'utf8');
    }




}

// export default ContactService();