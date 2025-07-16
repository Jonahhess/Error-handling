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

function handleLoad() {
  view.printLoading();
  let parsedData;
  try {
    parsedData = model.load();
    view.printLoaded(data.length);
  } catch (error) {
    console.error(error);
    view.printFileNotFound();
    model.createFile(); // instead of throwing, we gracefully correct the program
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

module.exports = {
  handleAdd,
  handleDelete,
  handleSearch,
  handleLoad,
  handleSave,
};
