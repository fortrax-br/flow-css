/*!
  * FlowCss v1.0.0 (https://github.com/fortrax-br/flow-css)
  * Copyright 2020-2020 Fortrax
  * Licensed under MIT (https://github.com/fortrax/flowcss/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.flowcss = factory());
}(this, (function () { 'use strict';

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

  var index_umd = {
    Alert
  };

  return index_umd;

})));
//# sourceMappingURL=flowcss.bundle.js.map
