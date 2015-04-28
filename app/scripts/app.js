'use strict';

import angular from 'angular'

import ngRoute from 'angular-route'

angular
  .module('Muggles', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      })
  })
