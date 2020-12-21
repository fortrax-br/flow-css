/*!
  * FlowCss v1.0.0 (https://github.com/fortrax-br/flow-css)
  * Copyright 2020-2020 Fortrax
  * Licensed under MIT (https://github.com/fortrax/flowcss/blob/main/LICENSE)
  */
function selectAllElements(selector = null, documentSelect = document) {
  if (selector) {
    const domElements = documentSelect.querySelectorAll(selector);
    return domElements.length > 0 ? domElements : [];
  }

  return [];
}

const DATA_ALERT_HIDE = '[data-flow-hide="alert"]';
const CLASS_ALERT = 'alert';
const ALERT_EVENT = 'click';

class Alert {
  constructor(element = DATA_ALERT_HIDE) {
    this.element = element;
  }

  _getMainElement(childElement) {
    return childElement.closest(`.${CLASS_ALERT}`);
  }

  _destroyDomElement(element) {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }

  _closeAlert(closeElement) {
    const mainElement = this._getMainElement(closeElement);

    this._destroyDomElement(mainElement);
  }

  execute() {
    const domElements = selectAllElements(this.element);
    domElements.forEach(element => {
      element.addEventListener(ALERT_EVENT, () => this._closeAlert(element), false);
    });
  }

}

window.addEventListener('load', () => new Alert().execute(), false);

var index_esm = {
  Alert
};

export default index_esm;
//# sourceMappingURL=flowcss.esm.js.map
