import ExtendComponent from './extends/extendComponent';
import { selectAllElements } from './DOM/selectDomElements';

const ACCORDION_CLASS = '.accordion';
const ACCORDION_BUTTON = '[data-fw-toggle="accordion"]';
const ACCORDION_CLASS_SHOW = 'accordion-show';
const ACCORDION_BUTTON_CLICKED = 'accordion-clicked';
const COMPONENT_KEY = 'fw.accordion';

class Accordion extends ExtendComponent {
  constructor(element, componentKey) {
    super(element, componentKey);
  }

  _takeTheElementsThatEachButtonRepresents() {
    const buttons = document.querySelectorAll(ACCORDION_BUTTON);

    const buttonsAndElements = Array.prototype.map.call(buttons, button => {
      const dataButtonTarget = button.dataset.fwTarget;
      const element = document.querySelector(dataButtonTarget);

      return { button, element }
    });

    return buttonsAndElements;
  }

  _setClassesInElements(targetButton, targetElement) {
    const currentElement = document.querySelector(`.${ACCORDION_CLASS_SHOW}`);
    const currentButton = document.querySelector(`.${ACCORDION_BUTTON_CLICKED}`);
    
    if (currentElement && currentButton) {
      currentElement.classList.remove(ACCORDION_CLASS_SHOW);
      currentButton.classList.remove(ACCORDION_BUTTON_CLICKED);
    }
    
    if (!targetElement.classList.contains(ACCORDION_CLASS_SHOW)) {
      targetElement.classList.add(ACCORDION_CLASS_SHOW);
      targetButton.classList.add(ACCORDION_BUTTON_CLICKED);
    }
  }

  _addEventInButton(button, element) {
    button.addEventListener('click', () => 
      this._setClassesInElements(button, element), true);
  }

  execute() {
    const buttonsAndElements = this._takeTheElementsThatEachButtonRepresents();
    
    buttonsAndElements.forEach(item => {
      this._addEventInButton(item.button, item.element);
    });
  }
}

window.addEventListener('load', () => {
  const accordions = selectAllElements(ACCORDION_CLASS);

  accordions.forEach(accordion => {
    new Accordion(accordion, COMPONENT_KEY).execute();
  });
}, false);

export default Accordion;
