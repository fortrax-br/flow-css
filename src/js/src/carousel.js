import ExtendComponent from './extends/extendComponent';
import { selectAllElements } from './DOM/selectDomElements';

const CAROUSEL_DATA_TYPE = '[data-fw-type="carousel"]';
const COMPONENT_KEY = 'fw.carousel';

class Carousel extends ExtendComponent {
  constructor(element, componentKey) {
    super(element, componentKey);

    // initial position is index 1
    this._slidesAll = Array.from(this._element.children);
  }

  _getFirstChildrenWidth() {
    const slide = this._slidesAll[0];
    const slideWidth = slide.getBoundingClientRect().width;

    return slideWidth;
  }

  _setPositionInSlideChildrens(slides) {
    const slideWidth = this._getFirstChildrenWidth();

    for (let index = 0; index < slides.length; index++) {
      slides[index].style.left = `${slideWidth * index}px`;
    }
  }

  _automaticallyMovesSlide(carouselElement) {
    const currentSlide = carouselElement.querySelector('.active');
    const nextSlide = currentSlide.nextElementSibling;

    const targetSlide = nextSlide || this._slidesAll[0];

    this._moveSlide(carouselElement, currentSlide, targetSlide);
    this._toggleClassActiveSlide(currentSlide, targetSlide);
  }

  _moveSlide(carousel, currentSlide, targetSlide) {
    const positionToSlide = targetSlide.style.left;
    carousel.style.transform = `translateX(-${positionToSlide})`;
  }

  _toggleClassActiveSlide(currentActive, newActive) {
    currentActive.classList.remove('active');
    newActive.classList.add('active');
  }

  execute() { 
    this._setPositionInSlideChildrens(this._slidesAll);

    setInterval(() => {
      this._automaticallyMovesSlide(this._element);
    }, 2000);
  }
}

window.addEventListener('load', () => {
  const elements = selectAllElements(CAROUSEL_DATA_TYPE);
  
  elements.forEach(element => new Carousel(element, COMPONENT_KEY).execute());
}, true);

export default Carousel;
