luhn.js
=======

[![npm](https://img.shields.io/npm/v/luhn-alg.svg?style=flat-square)](https://www.npmjs.com/package/luhn-alg) [![Bower](https://img.shields.io/bower/v/luhn-alg.svg?style=flat-square)](https://github.com/leodido/luhn.js) [![Travis](https://img.shields.io/travis/leodido/luhn.js/master.svg?style=flat-square)](https://travis-ci.org/leodido/luhn.js)

> Fastest JavaScript implementation of the Luhn algorithm.

Benchmarks [here](http://jsperf.com/credit-card-validator/20).

This algorithm (also known as [Luhn formula](https://en.wikipedia.org/wiki/Luhn_algorithm)) is useful to validate a variety of identification numbers (e.g. **credit card numbers**).

### Install

~1KB.

[UMD](https://github.com/umdjs/umd) builds for development - **index.js** and **index.js.map** - and production - **index.min.js** - available.

So it's installable both on **node** and/or for **browsers**.

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

Include the UMD build (e.g., **index.min.js**) and you'll have a **luhn** function on the window/global scope.

Or use CommonJS, AMD, WTFYW etc.

Tests
-----

This project is fully unit tested on:

* node.js 0.10, node.js 0.12, io.js
* about 50 [browser versions](https://github.com/leodido/luhn.js/blob/master/.zuul.yml)

Credits
-------

- ShirtlessKirk's popular [gist](https://gist.github.com/ShirtlessKirk/2134376)
- Anyone contributing and improving performances

---

[![Analytics](https://ga-beacon.appspot.com/UA-49657176-1/luhn.js)](https://github.com/igrigorik/ga-beacon)
