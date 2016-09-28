'use strict';

// creating the main module
angular.module('genealogia', [
  // which depends on ngRoute
  'ngRoute'
]);


angular.module('genealogia')
  .controller('GenealogiaController', ['$location', '$log', function ($location, $log) {
    this.isActive = function (viewLocation) {
      $log.log(viewLocation);
      return viewLocation === $location.path();
    };
  }]);
