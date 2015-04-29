'use strict';
import jquery from 'jquery'
import semantic from 'xiaoyanzhuzzh/Semantic-UI@master/dist/semantic.min'
import angular from 'angular'
import ngRoute from 'angular-route'
//import RegisterController from './controllers/register-controller'

angular
  .module('Muggles', [
    'ngRoute',
    //'RegisterController'
  ])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '.tmp/views/login.html'
      }).
      when('/register', {
        templateUrl: '.tmp/views/register.html'
        //controller: 'RegisterController'
      }).
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true)
  }]);
