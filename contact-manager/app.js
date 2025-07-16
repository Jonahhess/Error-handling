import parser from "./utils/validation.js";
import throws from "./utils/throws.js";
import CommandService from './services/commandService.js';
import commandService from "./services/commandService.js";

const command = process.argv[2];
const args = process.argv.slice(3);

try {
  switch (command) {
    case "add": {
      const missingArgsMessage = `Missing arguments for add command\nUsage: node contacts.js add "name" "email" "phone"`;
      throws.throwIfLessThan(args.length, 3, missingArgsMessage);

      const parsedData = CommandService.handleLoad();
      const [name, email, phone] = parser.parseAdd(args);

      const updatedData = CommandService.handleAdd(name, email, phone, parsedData);
      CommandService.handleSave(updatedData);
      break;
    }
    case "delete": {
      const missingArgsMessage = `Missing arguments for delete command\nUsage: node contacts.js delete "email"`;
      throws.throwIfLessThan(args.length, 1, missingArgsMessage);

      const parsedData = CommandService.handleLoad();
      const email = parser.parseDelete(args);

      const updatedData = CommandService.handleDelete(email, parsedData);
      CommandService.handleSave(updatedData);
      break;
    }
    case "search": {
      const missingArgsMessage = `Missing arguments for delete command\nUsage: node contacts.js search "name"`;
      throws.throwIfLessThan(args.length, 1, missingArgsMessage);

      const parsedData = CommandService.handleLoad();
      const query = parser.parseSearch(args);
      CommandService.handleSearch(query, parsedData);
      break;
    }
    case "list": {
      const contacts = CommandService.handleLoad();
      CommandService.handleList(contacts);
      break;
    }
    case "help": {
      CommandService.handleHelp();
      break;
    }
    default: {
      const invalidCommandMessage = `Unknown command '${command}'\nUsage: node contacts.js [add|list|search|delete|help]`;
      throw new Error(invalidCommandMessage);
    }
  }
} catch (error) {
  commandService.handleError(error);
}
