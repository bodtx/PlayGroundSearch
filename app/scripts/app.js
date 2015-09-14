'use strict';

/**
 * @ngdoc overview
 * @name playgroundSearchApp
 * @description
 * # playgroundSearchApp
 *
 * Main module of the application.
 */
angular
  .module('playgroundSearchApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'leaflet-directive',
	'geolocation'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/playground', {
        templateUrl: 'views/playground.html',
        controller: 'PlaygroundCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
