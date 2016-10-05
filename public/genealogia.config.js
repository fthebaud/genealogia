'use strict';

// retreiving the main module
angular.module('genealogia')
  // injecting a few service providers
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

      // $locationProvider parses the URL in the address bar and makes changes to your application and vice versa.
      // use the HTML5 History API instead of # hack. Will fallback on # hack for old browsers
      // deactivated car refresh wasn't working any more...
      // $locationProvider.html5Mode(true);

      //configuring routes
      $routeProvider
        .when('/family-member-form', {
          template: ['<navbar></navbar>', '<family-member-form></family-member-form>']
        })
        .when('/family-list', {
          template: ['<navbar></navbar>', '<family-list></family-list>']
        })
        .when('/family-relationship', {
          template: ['<navbar></navbar>', '<family-relationship></family-relationship>']
        })
        .when('/family-tree', {
          template: ['<navbar></navbar>', '<family-tree></family-tree>']
        })
        .when('/signup-screen', {
          template: '<signup-screen></signup-screen>'
        })
        .when('/login-screen', {
          template: '<login-screen></login-screen>'
        })
        .otherwise('/login-screen');
    }]
  );
