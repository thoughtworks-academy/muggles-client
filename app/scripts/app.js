'use strict';

import jquery from 'jquery'
import semantic from 'xiaoyanzhuzzh/Semantic-UI@master/dist/semantic.min'
import angular from 'angular'
import ngRoute from 'angular-route'
import home_controller from './controllers/home-controller'

import { UserService } from './services/user-service'
import { RegisterController } from './controllers/register-controller'


angular
  .module('Muggles', ['ngRoute'])
  .controller('home_controller', home_controller)

  .service('userService', UserService)
  .controller('registerController', RegisterController)
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
      when('/home', {
        templateUrl: '.tmp/views/trainer/home.html',
        controller: 'home_controller'
      }).
      otherwise({
        redirectTo: '/'
      });
    //$locationProvider.html5Mode(true);
  }]);
