'use strict';

// retreiving the main module
angular.module('genealogia')
  // injecting a few service providers
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

      // $locationProvider parses the URL in the address bar and makes changes to your application and vice versa.
      // use the HTML5 History API instead of # hack. Will fallback on # hack for old browsers
      // deactivated car refresh wasn't working any more...
      // $locationProvider.html5Mode(true);

      //configuring routes: only one route for now!
      $routeProvider
        .when('/family-member-form', {
          template: '<family-member-form></family-member-form>'
        })
        .when('/family-list', {
          template: '<family-list></family-list>'
        })
        .when('/family-relationship', {
          template: '<family-relationship></family-relationship>'
        })
        .when('/family-tree', {
          template: '<family-tree></family-tree>'
        })
        .otherwise('/family-member-form');
    }]
  );
