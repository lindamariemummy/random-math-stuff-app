'use strict';

var expect = require('chai').expect;
var getBigNumber = require('../app/js/getBigNumber');

describe('client side test', function() {
  it('should make a big number', function() {
    expect(getBigNumber(1000)).to.be.gt(-1);
  });
});
