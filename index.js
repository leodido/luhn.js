(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.luhn = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (array) {
  return function (number) {
    var len = number ? number.length : 0,
        bit = 1,
        sum = 0;

    while (len--) {
      sum += !(bit ^= 1) ? parseInt(number[len], 10) : array[number[len]];
    }

    return sum % 10 === 0 && sum > 0;
  };
})([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]);

module.exports = exports['default'];

},{}]},{},[1])(1)
});


//# sourceMappingURL=index.js.map