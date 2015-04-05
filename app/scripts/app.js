'use strict';

/**
 * @ngdoc overview
 * @name letsfaceApp
 * @description
 * # letsfaceApp
 *
 * Main module of the application.
 */
angular
  .module('letsfaceApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
