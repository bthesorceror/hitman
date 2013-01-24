hitman
======

[![Build Status](https://travis-ci.org/bthesorceror/hitman.png?branch=master)](undefined)

It's all about fulfilling contracts.

Happy path (works just like an EventEmitter):
----------------------------------------------

```javascript

  var Hitman = require('hitman').Hitman;

  var emitter = new Hitman(['1', '2']);

  emitter.on('1', function() {
    console.log('hello world');
  });

  emitter.emit('1');

```

Wrapping an external EventEmitter:
---------------------------------

```javascript

  var Hitman       = require('hitman').Hitman,
      EventEmitter = require('events').EventEmitter;

  var ext_emitter = new EventEmitter(),
      emitter = new Hitman(['1', '2'], { emitter: ext_emitter });

  emitter.on('1', function() {
    console.log('hello world');
  });

  emitter.emit('1');

```

Both of the following examples will throw an error:
---------------------------------------------------

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
