import ContactService from './contactService.js';
import view from "../commands/commandHandler.js";

function handleAdd(name, email, phone) {
    try {
        const updatedData = ContactService.add(name, email, phone);
        view.printAdded(name);
        return updatedData;
    } catch (error) {
        view.printError(error);
    }
}

function handleDelete(email) {
    try {
        const [updatedData, deletedName] = ContactService.deleteContact(email);
        view.printDeleted(deletedName);
        return updatedData;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

function handleSearch(query, parsedData) {
    const contacts = ContactService.search(query, parsedData);
    view.printSearch(contacts);
}

function handleLoad() {
    view.printLoading();
    let parsedData;
    try {
        parsedData = ContactService.load();
        view.printLoaded(data.length);
    } catch (error) {
        console.log("here");
        console.error(error);
        view.printFileNotFound();
        ContactService.createFile(); // instead of throwing, we gracefully correct the program
        parsedData = [];
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

export default  {
    handleAdd,
    handleDelete,
    handleSearch,
    handleLoad,
    handleSave,
    handleList,
    handleHelp,
    handleError,
};
