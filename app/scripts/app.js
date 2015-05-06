'use strict';

import jquery from 'jquery'
import semantic from 'xiaoyanzhuzzh/Semantic-UI@master/dist/semantic.min'
import angular from 'angular'
import ngRoute from 'angular-route'

import { services } from './services/services'
import { controllers } from './controllers/controllers'

angular
  .module('Muggles', [
    'ngRoute',
    'services',
    'controllers'
  ])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '.tmp/views/login.html',
        controller: 'loginController',
        controllerAs: 'vm'
      }).
      when('/register', {
        templateUrl: '.tmp/views/register.html',
        controller: 'registerController',
        controllerAs: 'vm'
      }).
      when('/appraise', {
        templateUrl: '.tmp/views/appraise.html',
        controller: 'appraiseController',
        controllerAs: 'vm'
      }).
      otherwise({
        redirectTo: '/'
      });
   // $locationProvider.html5Mode(true)
  }]);
