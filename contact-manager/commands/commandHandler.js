const printHelp = () => {
  console.log(`Usage: node contacts.js [command] [arguments]

Commands:
  add "name" "email" "phone"  - Add a new contact
  list                        - List all contacts
  search "query"              - Search contacts by name or email
  delete "email"              - Delete contact by email
  help                        - Show this help message

Examples:
  node contacts.js add "John Doe" "john@example.com" "555-123-4567"
  node contacts.js search "john"
  node contacts.js delete "john@example.com"
`);
};

const printInvalidEmail = () =>
  console.log("✗ Error: Email must contain @ symbol");

const printLoading = () =>
  console.log("Loading contacts from contacts.json...");

const printFileNotFound = () =>
  console.log("✗ File not found - creating new contact list");

const printAdded = (name) => console.log(`✓ Contact added: ${name}`);

const printSaved = () => console.log("✓ Contacts saved to contacts.json");

const printLoaded = (numContacts) =>
  console.log(`✓ Loaded ${numContacts} contact${numContacts === 1 ? "" : "s"}`);

// helper function - internal use only
const printContacts = (contacts) => {
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    console.log(
      `${i + 1}. ${contact.name} - ${contact.email} - ${contact.phone}`
    );
  }
};

const printList = (contacts) => {
  console.log("=== All Contacts ===");
  printContacts(contacts);
};

const printSearch = (query, contacts) => {
  console.log(`=== Search Results for "${query}" ===`);
  if (contacts) {
    printContacts(contacts);
  } else {
    console.log(`No contacts found matching "${query}"`);
  }
};

const printNoEmailFound = (email) =>
  console.log(`✗ Error: No contact found with email: ${email}`);

const printEmailTaken = () =>
  console.log("✗ Error: Contact with this email already exists");
const printDeleted = (deletedName) =>
  console.log(`✓ Contact deleted: ${deletedName}`);

const printError = (error) => console.log(`✗ Error: ${error.message}`);

module.exports = {
  printHelp,
  printInvalidEmail,
  printLoading,
  printFileNotFound,
  printAdded,
  printSaved,
  printLoaded,
  printList,
  printSearch,
  printNoEmailFound,
  printEmailTaken,
  printDeleted,
  printError,
};
