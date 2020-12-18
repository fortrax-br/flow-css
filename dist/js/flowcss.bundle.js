(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.flowcss = factory());
}(this, (function () { 'use strict';

  function teste(a) {
    return a * 3;
  }

  function cu() {
    return 'ola cu';
  }

  var index_umd = {
    teste,
    cu
  };

  return index_umd;

})));
//# sourceMappingURL=flowcss.bundle.js.map
