'use strict';

// retreiving the main module
angular.module('genealogia').
  // injecting a few service providers
  config(['$locationProvider', '$routeProvider',
    // and configuring the module through service providers
    function ($locationProvider, $routeProvider) {

      //something to do with deep linking?
      $locationProvider.hashPrefix('!');

      //configuring routes: only one route for now!
      $routeProvider.
      when('/family-member-form', {
        template: '<family-member-form></family-member-form>'
      }).
      otherwise('/family-member-form');
    }
  ]);
