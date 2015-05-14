'use strict';

import 'angular-mocks'
import 'mocha'
import { sinon_chai } from 'sinon-chai'
import { chai } from 'chai'
import { sinon } from 'sinon'

chai.use(sinon_chai);

beforeEach(function() {
  // Create a new sandbox before each test
  this.sinon = sinon.sandbox.create();
});

afterEach(function() {
  // Cleanup the sandbox to remove all the stubs
  this.sinon.restore();
});

module.exports = {
  root_url: 'http://localhost:3030',
  sinon: sinon,
  expect: chai.expect
};
