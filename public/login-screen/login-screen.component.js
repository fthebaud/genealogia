'use strict';

angular.module('genealogia')
  .component('loginScreen', {
    templateUrl: 'login-screen/login-screen.template.html',
    controller: ['$location', '$log', function ($location, $log) {
      this.login = function () {
        $log.log('login');
        $location.path('/family-member-form');
      };
    }],
    controllerAs: 'loginCtrl'
  });
