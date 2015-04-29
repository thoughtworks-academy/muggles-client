'use strict';
import jquery from 'jquery'
import semantic from 'xiaoyanzhuzzh/Semantic-UI@master/dist/semantic.min'
import angular from 'angular'
import ngRoute from 'angular-route'
import { RegisterController } from './controllers/register-controller'
import { RegisterService } from './services/register-service'


angular
  .module('Muggles', [
    'ngRoute'
  ])
  .controller('registerController', RegisterController)
  .service('registerService', RegisterService)
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '.tmp/views/login.html'
      }).
      when('/register', {
        templateUrl: '.tmp/views/register.html',
        controller: 'registerController'
      }).
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true)
  }]);
