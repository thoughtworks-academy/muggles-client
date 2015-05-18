'use strict';

import mocha from 'mocha'
import sinon_chai from 'sinon-chai'
import chai  from 'chai'
import sinon from 'sinon'

chai.use(sinon_chai);

beforeEach(function() {
  this.sinon = sinon.sandbox.create();
});

afterEach(function() {
  this.sinon.restore();
});

module.exports = {
  root_url: 'http://localhost:3030',
  sinon: sinon,
  expect: chai.expect
};
