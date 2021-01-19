/*!
  * FlowCss v1.0.0 (https://github.com/fortrax-br/flow-css)
  * Copyright 2020-2021 Fortrax
  * Licensed under MIT (https://github.com/fortrax/flowcss/blob/main/LICENSE)
  */
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function selectAllElements(selector, documentSelect) {
  if (selector === void 0) {
    selector = null;
  }

  if (documentSelect === void 0) {
    documentSelect = document;
  }

  if (selector) {
    var domElements = documentSelect.querySelectorAll(selector);
    return domElements ? domElements : [];
  }

  return [];
}

var Components = new Map();
var FLOW_VERSION = '1.0.0';

var ExtendComponent = /*#__PURE__*/function () {
  function ExtendComponent(element, componentKey) {
    if (!element) {
      return;
    }

    this._element = element;
    this.componentKey = componentKey;
    Components.set(this._element, this.componentKey);
  }

  var _proto = ExtendComponent.prototype;

  _proto.drop = function drop() {
    Components["delete"](this._element);
    this._element = null;
  };

  _proto.getInstance = function getInstance() {
    return Components.get(this._element);
  };

  _proto.version = function version() {
    return FLOW_VERSION;
  };

  return ExtendComponent;
}();

var DATA_ALERT_HIDE = '[data-flow-hide="alert"]';
var CLASS_ALERT = 'alert';
var ALERT_EVENT = 'click';
var COMPONENT_KEY = 'fw.alert';

var Alert = /*#__PURE__*/function (_ExtendComponent) {
  _inheritsLoose(Alert, _ExtendComponent);

  function Alert(element, componentKey) {
    return _ExtendComponent.call(this, element, componentKey) || this;
  }

  var _proto = Alert.prototype;

  _proto._getMainElement = function _getMainElement(childElement) {
    return childElement.closest("." + CLASS_ALERT);
  };

  _proto._destroyDomElement = function _destroyDomElement(element) {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  };

  _proto._closeAlert = function _closeAlert(closeElement) {
    var mainElement = this._getMainElement(closeElement);

    this._destroyDomElement(mainElement);
  };

  _proto.execute = function execute() {
    var _this = this;

    var domElements = selectAllElements(this._element);
    domElements.forEach(function (element) {
      element.addEventListener(ALERT_EVENT, function () {
        return _this._closeAlert(element);
      }, false);
    });
  };

  return Alert;
}(ExtendComponent);

window.addEventListener('load', function () {
  new Alert(DATA_ALERT_HIDE, COMPONENT_KEY).execute();
}, false);

var ACCORDION_CLASS = '.accordion';
var ACCORDION_BUTTON = '[data-fw-toggle="accordion"]';
var ACCORDION_CLASS_SHOW = 'accordion-show';
var ACCORDION_BUTTON_CLICKED = 'accordion-clicked';
var COMPONENT_KEY$1 = 'fw.accordion';

var Accordion = /*#__PURE__*/function (_ExtendComponent) {
  _inheritsLoose(Accordion, _ExtendComponent);

  function Accordion(element, componentKey) {
    return _ExtendComponent.call(this, element, componentKey) || this;
  }

  var _proto = Accordion.prototype;

  _proto._takeTheElementsThatEachButtonRepresents = function _takeTheElementsThatEachButtonRepresents() {
    var buttons = document.querySelectorAll(ACCORDION_BUTTON);
    var buttonsAndElements = Array.prototype.map.call(buttons, function (button) {
      var dataButtonTarget = button.dataset.flowTarget;
      var element = document.querySelector(dataButtonTarget);
      return {
        button: button,
        element: element
      };
    });
    return buttonsAndElements;
  };

  _proto._setClassesInElements = function _setClassesInElements(targetButton, targetElement) {
    var currentElement = document.querySelector("." + ACCORDION_CLASS_SHOW);
    var currentButton = document.querySelector("." + ACCORDION_BUTTON_CLICKED);

    if (currentElement && currentButton) {
      currentElement.classList.remove(ACCORDION_CLASS_SHOW);
      currentButton.classList.remove(ACCORDION_BUTTON_CLICKED);
    }

    if (!targetElement.classList.contains(ACCORDION_CLASS_SHOW)) {
      targetElement.classList.add(ACCORDION_CLASS_SHOW);
      targetButton.classList.add(ACCORDION_BUTTON_CLICKED);
    }
  };

  _proto._addEventInButton = function _addEventInButton(button, element) {
    var _this = this;

    button.addEventListener('click', function () {
      return _this._setClassesInElements(button, element);
    }, true);
  };

  _proto.execute = function execute() {
    var _this2 = this;

    var buttonsAndElements = this._takeTheElementsThatEachButtonRepresents();

    buttonsAndElements.forEach(function (item) {
      _this2._addEventInButton(item.button, item.element);
    });
  };

  return Accordion;
}(ExtendComponent);

window.addEventListener('load', function () {
  var accordions = selectAllElements(ACCORDION_CLASS);
  accordions.forEach(function (accordion) {
    new Accordion(accordion, COMPONENT_KEY$1).execute();
  });
}, false);

var CAROUSEL_DATA_TARGET = '[data-fw-target="carousel"]';
var CAROUSEL_DOT = '.carousel-dot';
var CAROUSEL_CONTROL_PREV = '.carousel-control-prev';
var CAROUSEL_CONTROL_NEXT = '.carousel-control-next';
var CAROUSEL_ACTIVE = 'active';
var COMPONENT_KEY$2 = 'fw.carousel';
var SLIDE_DELAY = 2000;

var Carousel = /*#__PURE__*/function (_ExtendComponent) {
  _inheritsLoose(Carousel, _ExtendComponent);

  function Carousel(element, childElement, componentKey) {
    var _this;

    _this = _ExtendComponent.call(this, element, componentKey) || this;
    _this._childElement = childElement;
    _this._allSlides = Array.from(_this._childElement.children);
    _this._currentSlide = 0;
    _this._isWithControls = Boolean(_this._element.dataset.fwControls == 'true');
    _this._isWithDots = Boolean(_this._element.dataset.fwDots == 'true');
    _this._dotElements = [];
    _this._controlElements = [];
    return _this;
  }

  var _proto = Carousel.prototype;

  _proto._moveSlide = function _moveSlide(targetSlide) {
    var _this2 = this;

    this._allSlides.forEach(function (slide, index) {
      slide.classList.remove(CAROUSEL_ACTIVE);
      _this2._isWithDots && _this2._dotElements[index].classList.remove(CAROUSEL_ACTIVE);
    });

    this._allSlides[targetSlide].classList.add(CAROUSEL_ACTIVE);

    this._isWithDots && this._dotElements[targetSlide].classList.add(CAROUSEL_ACTIVE);
  };

  _proto._incrementAndMoveSlide = function _incrementAndMoveSlide(targetSlide) {
    this._currentSlide = targetSlide;

    this._moveSlide(targetSlide);
  };

  _proto._configureDotElements = function _configureDotElements() {
    var _this3 = this;

    this._dotElements = selectAllElements(CAROUSEL_DOT, this._element);

    this._dotElements[0].classList.add(CAROUSEL_ACTIVE);

    this._dotElements.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        return _this3._incrementAndMoveSlide(index);
      });
    });
  };

  _proto._configureControlElements = function _configureControlElements() {
    var _this4 = this;

    var controlPrevSlide = selectAllElements(CAROUSEL_CONTROL_PREV, this._element);
    var controlNextSlide = selectAllElements(CAROUSEL_CONTROL_NEXT, this._element);
    controlPrevSlide.forEach(function (control) {
      control.addEventListener('click', function () {
        var prevIndex = _this4._currentSlide > 0 ? _this4._currentSlide - 1 : _this4._allSlides.length - 1;

        _this4._incrementAndMoveSlide(prevIndex);
      });
    });
    controlNextSlide.forEach(function (control) {
      control.addEventListener('click', function () {
        var nextIndex = _this4._currentSlide < _this4._allSlides.length - 1 ? _this4._currentSlide + 1 : 0;

        _this4._incrementAndMoveSlide(nextIndex);
      });
    });
  };

  _proto._animateCarousel = function _animateCarousel() {
    var _this5 = this;

    if (this._currentSlide === this._allSlides.length) {
      this._currentSlide = 0;
    }

    this._moveSlide(this._currentSlide);

    this._currentSlide += 1;
    setTimeout(function () {
      requestAnimationFrame(function () {
        return _this5._animateCarousel();
      });
    }, SLIDE_DELAY);
  };

  _proto.execute = function execute() {
    this._isWithDots && this._configureDotElements();
    this._isWithControls ? this._configureControlElements() : this._animateCarousel();
  };

  return Carousel;
}(ExtendComponent);

window.addEventListener('load', function () {
  var childElements = Array.from(selectAllElements(CAROUSEL_DATA_TARGET));
  var elementsID = childElements.map(function (child) {
    return document.querySelector("#" + child.dataset.fwToggle);
  });
  elementsID.forEach(function (element, index) {
    new Carousel(element, childElements[index], COMPONENT_KEY$2).execute();
  });
}, true);

var index_esm = {
  Alert: Alert,
  Accordion: Accordion,
  Carousel: Carousel
};

export default index_esm;
//# sourceMappingURL=flowcss.esm.js.map
