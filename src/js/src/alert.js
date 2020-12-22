import { selectAllElements } from './DOM/selectDomElements';
import ExtendComponent from './extends/extendComponent';

const DATA_ALERT_HIDE = '[data-flow-hide="alert"]';
const CLASS_ALERT = 'alert';
const ALERT_EVENT = 'click';
const COMPONENT_KEY = 'fw.alert';

class Alert extends ExtendComponent {
  constructor(element, componentKey) {
    super(element, componentKey);
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
    const domElements = selectAllElements(this._element);
    
    domElements.forEach(( element ) => {
      element.addEventListener(ALERT_EVENT, () => this._closeAlert(element), false);
    });
  }
}

window.addEventListener('load', () => {
  new Alert(DATA_ALERT_HIDE, COMPONENT_KEY).execute();
}, false);

export default Alert;
