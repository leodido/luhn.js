(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('luhn', factory) :
  (global.luhn = factory());
}(this, function () { 'use strict';

  var luhn = function luhn(array) {
    return function (number) {
      var len = number ? number.length : 0,
          bit = 1,
          sum = 0;

      while (len--) {
        sum += !(bit ^= 1) ? parseInt(number[len], 10) : array[number[len]];
      }

      return sum % 10 === 0 && sum > 0;
    };
  };

  var index = luhn([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]);

  return index;

}));
//# sourceMappingURL=index.js.map