function selectAllElements(selector = null, documentSelect = document) {
  if (selector) {
    const domElements = documentSelect.querySelectorAll(selector);

    return domElements.length > 0 ? domElements : [];
  }
  return [];
}

export { selectAllElements };
