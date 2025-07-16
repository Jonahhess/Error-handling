import filesUtils from "../utils/fileUtils.js";
import jsonUtils from "../utils/jsonUtils.js";
import contactsUtils from "../utils/contactsUtils.js";

function load() {
  let json;
  let createdNewArr = false;
  try {
    json = filesUtils.readFromFile();
  } catch (error) {
    filesUtils.overwriteFile("[]");
    json = "[]";
    createdNewArr = true;
  }

  const parsedData = jsonUtils.JSONToObjectArray(json);
  return { parsedData, createdNewArr };
}

function save(parsedData) {
  const json = jsonUtils.ObjectArrayToJSON(parsedData);
  filesUtils.overwriteFile(json);
}

// error handling:
// 1. handle empty arr
// 2. handle writing to the file went wrong
function add(name, email, phone, parsedData) {
  const contactsMap = contactsUtils.objectArrayToMap(parsedData);

  if (contactsMap.has(email))
    throw new Error("Contact with this email already exists");

  const newContact = { name, email, phone };
  parsedData.push(newContact);
  return parsedData;
}

// error handling:
// 1. handle writing to the file went wrong
function deleteContact(email, parsedData) {
  if (!parsedData.length) {
    return [parsedData];
  }

  let contactsMap = contactsUtils.objectArrayToMap(parsedData);
  const contactToDelete = contactsMap.get(email);
  if (!contactToDelete)
    throw new Error("No contact found with email: " + email);
  contactsMap.delete(email);
  const updatedData = contactsUtils.mapToObjectArray(contactsMap);
  return [updatedData, contactToDelete.name]; // on success - return contact name and contacts length
}

function list() {
  const contacts = this.load();
  return contacts;
}

function search(name, contacts) {
  const contactsByName = contactsUtils.findAllContactsByName(contacts, name);
  return contactsByName;
}

export default {
  load,
  save,
  deleteContact,
  add,
  list,
  search,
};
