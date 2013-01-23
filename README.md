hitman
======

[![Build Status](https://travis-ci.org/bthesorceror/hitman.png?branch=master)](undefined)

It's all about fulfilling contracts.

Happy Path (works just like an event emitter)

```javascript

  var Hitman = require('hitman').Hitman;

  var emitter = new Hitman(['1', '2']);

  emitter.on('1', function() {
    console.log('hello world');
  });

  emitter.emit('1');

```

Both of the following examples will throw an error:

```javascript

  var Hitman = require('hitman').Hitman;

  var emitter = new Hitman(['1', '2']);

  emitter.on('3', function() {
    console.log('hello world');
  });

```

```javascript

  var Hitman = require('hitman').Hitman;

  var emitter = new Hitman(['1', '2']);

  emitter.emit('3');

```
