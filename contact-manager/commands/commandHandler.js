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

// helper function
const createTitle = (title) => {
  return `=== ${title} ===`;
};

const printList = (contacts) => {
  const title = "All Contacts";
  console.log(createTitle(title));
  printContacts(contacts);
};

const printSearch = (query, contacts) => {
  const title = `Search Results for "${query}"`;
  console.log(createTitle(title));
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

const printInvalidCommand = (command) =>
  console.log(`✗ Error: Unknown command '${command}'
Usage: node contacts.js [add|list|search|delete|help] `);

const printMissingAddArgs = () =>
  console.log(`✗ Error: Missing arguments for add command
Usage: node contacts.js add "name" "email" "phone"`);

const printMissingDeleteArgs = () =>
  console.log(`✗ Error: Missing arguments for delete command
Usage: node contacts.js delete "email"`);

const printMissingSearchArgs = () =>
  console.log(`✗ Error: Missing arguments for delete command
Usage: node contacts.js search "name"`);

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
  printInvalidCommand,
  printMissingAddArgs,
  printMissingDeleteArgs,
  printMissingSearchArgs,
};
