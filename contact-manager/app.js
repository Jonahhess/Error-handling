import parser from "./utils/validation";
import view from "./commands/commandHandler";
import model from "./services/contactService";
import jsonUtil from "./utils/jsonUtils";

const FILENAME = "../DB/contacts.json";
const command = process.argv[2];
const args = process.argv.slice(3);

switch (command) {
  case "add": {
    try {
      const json = model.load(FILENAME);
      const parsedData = jsonUtil.JSONToObjectArray(json);
      const [name, email, phone] = parser.parseAdd(args);
      handleAdd(name, email, phone, parsedData);
    } catch (err) {
      switch (err._) {
        case "name": {
          view.printInvalidName();
          break;
        }
        case "email": {
          view.printInvalidEmail();
          break;
        }
        case "phone": {
          view.printInvalidPhone();
          break;
        }
      }
    }
    break;
  }
  case "delete": {
    handleDelete(args);
  }
}

function handleAdd(name, email, phone) {
  try {
    view.printLoading();
    const success = model.add(name, email, phone);
  } catch (error) {
    if (error.message === "cannot open file") {
      view.printFileNotFound();
    }
  }
  if (success) {
    view.printAdd(name);
  }
}

function handleDelete(email) {
  try {
    const success = model.delete(email);
  } catch (err) {
    view.printNoEmailFound();
  }
}

function handleHelp() {
  view.help();
}

function handleLoad(FILENAME) {
  let data;
  try {
    data = model.load(FILENAME);
    view.printLoaded(data.length);
  } catch (error) {
    view.printError(error);
    data = [];
  }
}
