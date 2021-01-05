import ExtendComponent from './extends/extendComponent';

const ACCORDION_CLASS = '.accordion';
const ACCORDION_CLASS_ITEM = '.accordion-item';
const ACCORDION_BUTTON = '[data-flow-toggle="accordion"]';
const ACCORDION_CLASS_SHOW = 'accordion-show';
const ACCORDION_CLASS_CONTENT = '.accordion-content';
const COMPONENT_KEY = 'fw.accordion';

class Accordion extends ExtendComponent {
  constructor(element, componentKey) {
    super(element, componentKey);
  }

  _takeTheElementsThatEachButtonRepresents() {
    const buttons = document.querySelectorAll(ACCORDION_BUTTON);

    const buttonsAndElements = Array.prototype.map.call(buttons, button => {
      const dataButtonTarget = button.dataset.flowTarget;
      const element = document.querySelector(dataButtonTarget);

      return {
        button,
        element,
      }
    });

    return buttonsAndElements;
  }

  _setClassesInElements(targetElement) {
    const currentElement = document.querySelector(`.${ACCORDION_CLASS_SHOW}`);

    if (currentElement && currentElement.id !== targetElement.id) {
      currentElement.classList.remove(ACCORDION_CLASS_SHOW);
    }

    if (!targetElement.classList.contains(ACCORDION_CLASS_SHOW)) {
      targetElement.classList.add(ACCORDION_CLASS_SHOW);
    }

    return;
  }

  _addEventInButton(button, element) {
    button.addEventListener('click', () => this._setClassesInElements(element), true);
  }

  execute() {
    const buttonsAndElements = this._takeTheElementsThatEachButtonRepresents();
    
    buttonsAndElements.forEach(item => {
      this._addEventInButton(item.button, item.element);
    });

  }
}

window.addEventListener('load', () => {
  new Accordion(ACCORDION_CLASS, COMPONENT_KEY).execute();
}, false);

export default Accordion;
