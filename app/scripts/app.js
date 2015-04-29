'use strict';
import jquery from 'jquery'
import semantic from 'xiaoyanzhuzzh/Semantic-UI@master/dist/semantic.min'
import angular from 'angular'
import ngRoute from 'angular-route'

angular
  .module('Muggles', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '.tmp/views/login.html'
      }).
      when('/register', {
        templateUrl: '.tmp/views/register.html'
      }).
      otherwise({
        redirectTo: '/'
      })
    $locationProvider.html5Mode(true);
  }])
