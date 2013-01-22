var EventEmitter = require('events').EventEmitter;

function throwEventError(event, attempting) {
  throw "Error: attempting to '" + attempting + "' with event '" + event + "'"
}

function Hitman(contract) {
  this.emitter = new EventEmitter();
  this.contract = contract;
}

Hitman.prototype.on = function(event, callback) {
  if (this.contract.indexOf(event) < 0) { throwEventError(event, 'binding'); }
  this.emitter.on(event, callback);
}

Hitman.prototype.emit = function() {
  var event = arguments[0];
  if (this.contract.indexOf(event) < 0) { throwEventError(event, 'emitting'); }
  this.emitter.emit.apply(this.emitter, arguments);
}

exports.Hitman = Hitman;
