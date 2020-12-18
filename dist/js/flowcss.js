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

  function testing() {
    alert('testing script compile');
  }

  var index_umd = {
    testing: testing()
  };

  return index_umd;

})));
//# sourceMappingURL=flowcss.js.map
