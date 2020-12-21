import { selectAllElements } from './DOM/selectDomElements';

const DATA_ALERT_HIDE = '[data-flow-hide="alert"]';
const CLASS_ALERT = 'alert';
const CLASS_ALERT_SHOW = 'show';
const CLASS_ALERT_EASY = 'alert-easy';
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
    
    domElements.forEach(( element ) => {
      element.addEventListener(ALERT_EVENT, () => this._closeAlert(element), false);
    });
  }
}

window.addEventListener('load', () => new Alert().execute(), false);

export default Alert;
