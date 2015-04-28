'use strict';

import angular from 'angular'

import ngRoute from 'angular-route'

angular
  .module('Muggles', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '.tmp/views/main.html'
      }).
      otherwise({
        redirectTo: '/'
      })
    $locationProvider.html5Mode(true);
  }])
