'use strict';

/**
 * @ngdoc function
 * @name playgroundSearchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the playgroundSearchApp
 */
angular.module('playgroundSearchApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
