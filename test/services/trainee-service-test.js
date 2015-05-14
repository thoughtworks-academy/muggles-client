'use strict';

import 'angular-mocks'
import 'mocha'
import { helper } from '../helper'

var expect = helper.expect;
var root_url = helper.root_url;

describe('traineeService', function () {

  var http, trainee_service;

  beforeEach(module('services'));
  beforeEach(inject(function($http, traineeService) {

    http = $http;
    trainee_service = traineeService;
  }));

  it('should have http get request and the response should be right', function() {

    var response = {};
    var status;
    var email = '915375045@qq.com';

    $httpBackend.when('GET', root_url + '/api/trainees/verification/' + email).respond(200, {
      message: 'Get successfully!'
    });

    $http.get(root_url + '/api/trainees/verification/' + email).success(function(data){
      response = data;
    });

    $httpBackend.flush();

    expect(response.message).toBe('Get successfully!');
  });
});

