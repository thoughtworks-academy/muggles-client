'use strict';
import jquery from 'jquery'
import semantic from 'xiaoyanzhuzzh/Semantic-UI@master/dist/semantic.min'
import angular from 'angular'
import ngRoute from 'angular-route'

import { loginController } from './controllers/login-controller'

angular
  .module('Muggles', ['ngRoute'])
    .controller('loginController',loginController)
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '.tmp/views/login.html',
        controller: 'loginController',
        controllerAs: 'vm'
      }).
      when('/register', {
        templateUrl: '.tmp/views/register.html'
      }).
      otherwise({
        redirectTo: '/'
      })
    $locationProvider.html5Mode(true);
  }])
