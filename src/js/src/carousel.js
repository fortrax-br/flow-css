import ExtendComponent from './extends/extendComponent';
import { selectAllElements } from './DOM/selectDomElements';

const CAROUSEL_DATA_TARGET = '[data-fw-target="carousel"]';
const CAROUSEL_DOT = '.carousel-dot';
const CAROUSEL_CONTROL_PREV = '.carousel-control-prev';
const CAROUSEL_CONTROL_NEXT = '.carousel-control-next';
const CAROUSEL_ACTIVE = 'active';

const COMPONENT_KEY = 'fw.carousel';
const SLIDE_DELAY = 2000;

class Carousel extends ExtendComponent {
  constructor(element, childElement, componentKey) {
    super(element, componentKey);

    this._childElement = childElement;
    this._allSlides = Array.from(this._childElement.children);
    this._currentSlide = 0;
    this._isWithControls = Boolean(this._element.dataset.fwControls == 'true');
    this._isWithDots = Boolean(this._element.dataset.fwDots == 'true');
    this._dotElements = [];
    this._controlElements = [];
  }

  _moveSlide(targetSlide) {
    this._allSlides.forEach((slide, index) => {
      slide.classList.remove(CAROUSEL_ACTIVE);
      this._isWithDots && this._dotElements[index].classList.remove(CAROUSEL_ACTIVE);
    });

    this._allSlides[targetSlide].classList.add(CAROUSEL_ACTIVE);
    this._isWithDots && this._dotElements[targetSlide].classList.add(CAROUSEL_ACTIVE);
  }

  _incrementAndMoveSlide(targetSlide) {
    this._currentSlide = targetSlide;
    this._moveSlide(targetSlide);
  }

  _configureDotElements() {
    this._dotElements = selectAllElements(CAROUSEL_DOT, this._element);
    this._dotElements[0].classList.add(CAROUSEL_ACTIVE);

    this._dotElements.forEach((dot, index) => {
      dot.addEventListener('click', () => this._incrementAndMoveSlide(index));
    })
  }

  _configureControlElements() {
    const controlPrevSlide = selectAllElements(CAROUSEL_CONTROL_PREV, this._element);
    const controlNextSlide = selectAllElements(CAROUSEL_CONTROL_NEXT, this._element);

    controlPrevSlide.forEach(control => {
      control.addEventListener('click', () => {
        let prevIndex = this._currentSlide > 0 
          ? this._currentSlide-1
          : this._allSlides.length-1;

        this._incrementAndMoveSlide(prevIndex);
      });
    });

    controlNextSlide.forEach(control => {
      control.addEventListener('click', () => {
        let nextIndex = this._currentSlide < this._allSlides.length-1 
          ? this._currentSlide + 1
          : 0;

        this._incrementAndMoveSlide(nextIndex);
      });
    });
  }

  _animateCarousel() {
    if (this._currentSlide === this._allSlides.length) {
      this._currentSlide = 0;
    }
      
    this._moveSlide(this._currentSlide);
    this._currentSlide+=1;

    setTimeout(() => {
      requestAnimationFrame(() => this._animateCarousel());
    }, SLIDE_DELAY);
  }

  execute() {
    this._isWithDots && this._configureDotElements();
    
    this._isWithControls 
      ? this._configureControlElements()
      : this._animateCarousel();
  }
}

window.addEventListener('load', () => {
  const childElements = Array.from(selectAllElements(CAROUSEL_DATA_TARGET));
  
  const elementsID = childElements.map(child => document.querySelector(`#${child.dataset.fwToggle}`));

  elementsID.forEach((element, index) => {
    new Carousel(
      element, 
      childElements[index], 
      COMPONENT_KEY).execute();
  });
}, true);

export default Carousel;
