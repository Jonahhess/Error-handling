// import ContactService from "./contactService.js";
// import view from "../commands/commandHandler.js";
const ContactService = require("./contactService.js");
const view = require("../commands/commandHandler.js");

function handleAdd(name, email, phone, parsedData) {
    try {
        const updatedData = ContactService.add(name, email, phone, parsedData);
        view.printAdded(name);
        return updatedData;
    } catch (error) {
        view.printError(error);
    }
}

function handleDelete(email, parsedData) {
    const [updatedData, deletedName] = ContactService.deleteContact(
        email,
        parsedData
    );

    if (!deletedName) {
        view.printNoEmailFound(email);
    } else {
        view.printDeleted(deletedName);
    }
    return [updatedData, deletedName];
}

function handleSearch(query, parsedData) {
    const contacts = ContactService.search(query, parsedData);
    view.printSearch(query, contacts);
}

function handleLoad() {
    view.printLoading();
    const { parsedData, createdNewArray } = ContactService.load();

    if (createdNewArray) {
        view.printFileNotFound();
    } else {
        view.printLoaded(parsedData.length);
    }
    return parsedData;
}

function handleSave(updatedData) {
    try {
        ContactService.save(updatedData);
        view.printSaved();
    } catch (error) {
        view.printError(error);
    }
}

function handleList(contacts) {
    view.printList(contacts);
}

function handleHelp() {
    view.printHelp();
}

function handleError(error) {
    view.printError(error);
}

// export default {
//   handleAdd,
//   handleDelete,
//   handleSearch,
//   handleLoad,
//   handleSave,
//   handleList,
//   handleHelp,
//   handleError,
// };
module.exports = {
    handleAdd,
    handleDelete,
    handleSearch,
    handleLoad,
    handleSave,
    handleList,
    handleHelp,
    handleError,
};
