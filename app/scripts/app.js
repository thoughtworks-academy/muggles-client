'use strict';

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
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: '.tmp/views/login.html',
        controller: 'loginController',
        controllerAs: 'vm'
      }).
      when('/register', {
        templateUrl: '.tmp/views/register.html',
        controller: 'registerController',
        controllerAs: 'vm'
      }).
      when('/home', {
        templateUrl: '.tmp/views/trainer/home.html',
        controller: 'homeController',
        controllerAs: 'vm'
      }).
      when('/appraise/:trainee_id', {
        templateUrl: '.tmp/views/appraise.html',
        controller: 'appraiseController',
        controllerAs: 'vm'
      }).
      when('/add_date_appraise', {
        templateUrl: '.tmp/views/add-date-appraise.html',
        controller: 'homeController',
        controllerAs: 'vm'
      }).
      when('/add_week_appraise', {
        templateUrl: '.tmp/views/add-week-appraise.html',
        controller: 'homeController',
        controllerAs: 'vm'
      }).when('/add_month_appraise', {
        templateUrl: '.tmp/views/add-month-appraise.html',
        controller: 'homeController',
        controllerAs: 'vm'
      }).when('/add_season_appraise', {
        templateUrl: '.tmp/views/add-season-appraise.html',
        controller: 'homeController',
        controllerAs: 'vm'
      }).
      otherwise({
        redirectTo: '/'
      });
    //$locationProvider.html5Mode(true);
  }]);
