'use strict';

// load Unit.js module
const test = require('unit.js');
// const {assert} = test;

describe('Ma demo', function() {
  it('example devrait être une string', function() {
    // just for example of tested value
    let example = 'hello Bidart';
    // assert that example variable is a string
    test.string(example);
  });

  it('example est égale à "hello Bidart"', function() {
    // just for example of tested value
    let example = 'hello Bidart';
    // assert that example variable is a string
    test.string(example).is('hello Bidart');
    example.should.be.equal('hello Bidart');
  });
});

