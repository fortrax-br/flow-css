function selectAllElements(selector = null, documentSelect = document) {
  if (selector) {
    const domElements = documentSelect.querySelectorAll(selector);

    return domElements ? domElements : [];
  }
  return [];
}

export { selectAllElements };
