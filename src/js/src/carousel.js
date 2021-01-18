import ExtendComponent from './extends/extendComponent';
import { selectAllElements } from './DOM/selectDomElements';

const CAROUSEL = '.carousel';
const CAROUSEL_DATA_TARGET = '[data-tw-target="carousel"]';
const CAROUSEL_ITEM = '.carousel-item';
const CAROUSEL_DOT = '.carousel-dot';
const CAROUSEL_CONTROL = '.carousel-control';
const CAROUSEL_CONTROL_PREV = '.carousel-control-prev';
const CAROUSEL_CONTROL_NEXT = '.carousel-control-next';
const COMPONENT_KEY = 'fw.carousel';
const SLIDE_DELAY = 2000;

class Carousel extends ExtendComponent {
  constructor(element, childElement, componentKey) {
    super(element, componentKey);

    this._childElement = childElement;
    this._allSlides = Array.from(this._childElement.children);
    this._currentSlide = 0;
    this._isWithControls = Boolean(this._element.dataset.twControls);
    this._isWithDots = Boolean(this._element.dataset.twDots);
    this._dotElements = [];
    this._controlElements = [];
    this._interval;
  }

  _moveSlide(targetSlide) {
    this._allSlides.forEach((slide, index) => {
      slide.classList.remove('active');
      this._dotElements[index].classList.remove('active');
    });

    this._allSlides[targetSlide].classList.add('active');
    this._dotElements[targetSlide].classList.add('active');
  }

  _incrementAndMoveSlide(targetSlide) {
    this._currentSlide = targetSlide;
    this._moveSlide(targetSlide);
  }

  _configureDotElements() {
    this._dotElements = selectAllElements(CAROUSEL_DOT);
    this._dotElements[0].classList.add('active');

    this._dotElements.forEach((dot, index) => {
      dot.addEventListener('click', () => this._incrementAndMoveSlide(index));
    })
  }

  _configureControlElements() {
    const controlPrevSlide = selectAllElements(CAROUSEL_CONTROL_PREV);
    const controlNextSlide = selectAllElements(CAROUSEL_CONTROL_NEXT);
    
    controlPrevSlide.forEach((control, index) => {
      control.addEventListener('click', () => {
        let prevIndex = this._currentSlide > 0 
          ? this._currentSlide-1
          : this._allSlides.length-1;

        this._incrementAndMoveSlide(prevIndex);
      });
    });

    controlNextSlide.forEach((control, index) => {
    if (control.closest(`#${this._element.id}`)) {
      control.addEventListener('click', () => {
        let nextIndex = this._currentSlide < this._allSlides.length-1 
          ? this._currentSlide + 1
          : 0;

        this._incrementAndMoveSlide(nextIndex);
      });
    }});
  }

  execute() {
    if (this._isWithDots) {
      this._configureDotElements();
    }
    
    let interval = setInterval(() => {
      if (this._currentSlide === this._allSlides.length) {
        this._currentSlide = 0;
      }
      
      this._moveSlide(this._currentSlide);
      this._currentSlide+=1;
    }, SLIDE_DELAY);


    if (this._isWithControls) {
      this._configureControlElements();
      clearInterval(interval);
    } 
  }  
}

window.addEventListener('load', () => {
  const elements = selectAllElements(CAROUSEL);
  const childElements = selectAllElements(CAROUSEL_DATA_TARGET);
  
  elements.forEach((element, index) => {
    new Carousel(
      element, 
      childElements[index], 
      COMPONENT_KEY).execute();
  });
}, true);

export default Carousel;
