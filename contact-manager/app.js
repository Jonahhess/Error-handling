import parser from "./utils/validation";
import view, { printList, printSearch } from "./commands/commandHandler";
import model from "./services/contactService";
import { throwIfLessThan } from "./utils/throws";

const FILENAME = "../DB/contacts.json";
const command = process.argv[2];
const args = process.argv.slice(3);

try {
  switch (command) {
    case "add": {
      const missingArgsMessage = `Missing arguments for add command\nUsage: node contacts.js add "name" "email" "phone"`;
      throwIfLessThan(args.length, 3, missingArgsMessage);

      const parsedData = handleLoad(FILENAME);
      const [name, email, phone] = parser.parseAdd(args);

      const updatedData = handleAdd(name, email, phone, parsedData);
      handleSave(updatedData);
      break;
    }
    case "delete": {
      const missingArgsMessage = `Missing arguments for delete command\nUsage: node contacts.js delete "email"`;
      throwIfLessThan(args.length, 1, missingArgsMessage);

      const parsedData = handleLoad(FILENAME);
      const email = parser.parseDelete(args);

      const updatedData = handleDelete(email, parsedData);
      handleSave(updatedData);
      break;
    }
    case "search": {
      const missingArgsMessage = `Missing arguments for delete command\nUsage: node contacts.js search "name"`;
      throwIfLessThan(args.length, 1, missingArgsMessage);

      const parsedData = handleLoad(FILENAME);
      const query = parser.parseSearch(args);

      const contacts = handleSearch(query, parsedData);
      printSearch(contacts);
      break;
    }
    case "help": {
      view.printHelp();
      break;
    }
    default: {
      const invalidCommandMessage = `Unknown command '${command}'\nUsage: node contacts.js [add|list|search|delete|help]`;
      throw new Error(invalidCommandMessage);
    }
  }
} catch (error) {
  view.printError(error);
}

function handleAdd(name, email, phone) {
  try {
    const updatedData = model.add(name, email, phone);
    view.printAdded(name);
    return updatedData;
  } catch (error) {
    view.printError(error);
  }
}

function handleDelete(email) {
  try {
    const [updatedData, deletedName] = model.delete(email);
    view.printDeleted(deletedName);
    return updatedData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function handleSearch(query, parsedData) {
  const contacts = model.search(query, parsedData);
  return contacts;
}

function handleLoad(FILENAME) {
  view.printLoading();
  let parsedData;
  try {
    parsedData = model.load(FILENAME);
    view.printLoaded(data.length);
  } catch (error) {
    console.error(error);
    view.printFileNotFound();
    model.createFile(FILENAME); // instead of throwing, we gracefully correct the program
  }
  return parsedData;
}

function handleSave(updatedData) {
  try {
    model.save(updatedData);
    view.printSaved();
  } catch (error) {
    view.printError(error);
  }
}
