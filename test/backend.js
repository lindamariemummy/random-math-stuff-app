'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);

require('../server');

var expect = chai.expect;

describe('square root request', function() {
  it('should return the correct square root', function() {
    chai.request('http://localhost:3000')
      .post('/sqrt')
      .send({number: 100})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.sqrt).to.eql(10);
      });
  });
});
