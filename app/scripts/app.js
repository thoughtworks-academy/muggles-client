'use strict';

import jquery from 'jquery'
import semantic from 'xiaoyanzhuzzh/Semantic-UI@master/dist/semantic.min'
import angular from 'angular'
import ngRoute from 'angular-route'

import { UserService } from './services/user'
import { RegisterController } from './controllers/register'
import { AppraiseController } from './controllers/appraise'


angular
  .module('Muggles', [
    'ngRoute'
  ])
  .service('userService', UserService)
  .controller('registerController', RegisterController)
  .controller('appraiseController', AppraiseController)
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '.tmp/views/login.html'
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
    //$locationProvider.html5Mode(true);
    $locationProvider.html5Mode(true)
  }]);
