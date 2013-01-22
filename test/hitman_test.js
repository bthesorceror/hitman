var Hitman = require('../hitman').Hitman,
    assert = require('assert');

describe('Hitman', function() {

  it('should be able to create an instance', function() {
    var hitman = new Hitman([]);
    assert.ok(hitman);
  });

  describe('acts as event emitter', function() {
    var contract = ['foot', 'mouth'];

    it('should bind and emit events', function(done) {
      var hitman = new Hitman(contract);

      hitman.on('foot', function(word) {
        assert.equal(word, 'hello governor');
        done();
      });

      hitman.emit('foot', 'hello governor');
    });

    it('should not allow binding to uncontracted events', function() {
      var hitman = new Hitman(contract);

      function bind() {
        hitman.on('hand', function() { });
      }

      assert.throws(bind);
    })

    it('should not allow emitting to uncontracted events', function() {
      var hitman = new Hitman(contract);

      function emit() {
        hitman.emit('hand', 'blah!');
      }

      assert.throws(emit);
    })
  });
});
