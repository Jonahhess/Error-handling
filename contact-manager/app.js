import parser from "./utils/validation";
import view from "./commands/commandHandler";
import ContactService from "./services/contactService";
import { throwIfLessThan } from "./utils/throws";
import CommandService from './services/commandService';

const PATH = "../DB/contacts.json";
const model = new ContactService(PATH);

const command = process.argv[2];
const args = process.argv.slice(3);

try {
  switch (command) {
    case "add": {
      const missingArgsMessage = `Missing arguments for add command\nUsage: node contacts.js add "name" "email" "phone"`;
      throwIfLessThan(args.length, 3, missingArgsMessage);

      const parsedData = CommandService.handleLoad();
      const [name, email, phone] = parser.parseAdd(args);

      const updatedData = CommandService.handleAdd(name, email, phone, parsedData);
      CommandService.handleSave(updatedData);
      break;
    }
    case "delete": {
      const missingArgsMessage = `Missing arguments for delete command\nUsage: node contacts.js delete "email"`;
      throwIfLessThan(args.length, 1, missingArgsMessage);

      const parsedData = CommandService.handleLoad();
      const email = parser.parseDelete(args);

      const updatedData = CommandService.handleDelete(email, parsedData);
      CommandService.handleSave(updatedData);
      break;
    }
    case "search": {
      const missingArgsMessage = `Missing arguments for delete command\nUsage: node contacts.js search "name"`;
      throwIfLessThan(args.length, 1, missingArgsMessage);

      const parsedData = CommandService.handleLoad();
      const query = parser.parseSearch(args);

      const contacts = CommandService.handleSearch(query, parsedData);
      view.printSearch(contacts);
      break;
    }
    case "list": {
      const contacts = CommandService.handleLoad();
      view.printList(contacts);
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
