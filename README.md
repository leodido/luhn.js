luhn.js
=======

**Fastest JavaScript implementation of the Luhn algorithm**.

Benchmarks [here](http://jsperf.com/credit-card-validator/20).

This algorithm (also known as [Luhn formula](https://en.wikipedia.org/wiki/Luhn_algorithm)) is useful to validate a variety of identification numbers (e.g. credit card numbers).

Install
-------

[UMD](https://github.com/umdjs/umd) builds for development and production available.

So it's installable both on node and/or for browsers.

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

Credits
-------

- ShirtlessKirk's popular [gist](https://gist.github.com/ShirtlessKirk/2134376)
- Anyone contributing and improving performances

---

[![Analytics](https://ga-beacon.appspot.com/UA-49657176-1/luhn.js)](https://github.com/igrigorik/ga-beacon)
