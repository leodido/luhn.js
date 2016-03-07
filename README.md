luhn.js
=======

[![npm](https://img.shields.io/npm/v/luhn-alg.svg?style=flat-square)](https://www.npmjs.com/package/luhn-alg) [![Bower](https://img.shields.io/bower/v/luhn-alg.svg?style=flat-square)](https://github.com/leodido/luhn.js) [![Travis](https://img.shields.io/travis/leodido/luhn.js/master.svg?style=flat-square)](https://travis-ci.org/leodido/luhn.js)

> Fastest JavaScript implementation of the Luhn algorithm.

Benchmarks [here](http://jsperf.com/credit-card-validator/20).

This algorithm (also known as [Luhn formula](https://en.wikipedia.org/wiki/Luhn_algorithm)) is useful to validate a variety of identification numbers (e.g. **credit card numbers**).

### Install

**~ 500 bytes**.

[UMD](https://github.com/umdjs/umd) bundles for development - **[index.js](lib/index.js)** with sourcemap **[index.js.map](lib/index.js.map)** - and production - **[index.min.js](lib/index.min.js)** - available.

So it's installable both on **node** and/or for **browsers**, with almost every module system existing (e.g. AMD, CJS).

```
$ npm install luhn-alg
$ bower install luhn-alg
```

Usage
-----

Simplest API ever.

```
luhn(x: number): boolean
```

### Node.js

Try it in node.

```
$ > var luhn = require('luhn-alg');
$ > luhn('4242424242424242');
$ true
```

### Browsers

Include the bundle (e.g., **index.min.js**) and you'll have a **luhn** function on the window/global scope.

Or use CommonJS, AMD, WTFYW etc.

Tests
-----

This project is fully unit tested on:

* node.js 0.12, node.js 4, latest node.js stable release
* about 50 [browser versions](https://github.com/leodido/luhn.js/blob/master/.zuul.yml)

Credits
-------

- ShirtlessKirk's popular [gist](https://gist.github.com/ShirtlessKirk/2134376)
- Anyone contributing and improving performances

---

[![Analytics](https://ga-beacon.appspot.com/UA-49657176-1/luhn.js?flat)](https://github.com/igrigorik/ga-beacon)
