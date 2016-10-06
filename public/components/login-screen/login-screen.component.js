'use strict';

angular.module('genealogia')
  .component('loginScreen', {
    templateUrl: 'components/login-screen/login-screen.template.html',
    controller: ['$location', '$log', function ($location, $log) {
      this.signIn = function () {
        $log.log('login!');
        $location.path('/family-member-form');
      };

      this.goToSignUp = function () {
        $log.log('gotosignup');
        $location.path('/sign-up');
      };
    }],
    controllerAs: 'loginCtrl'
  });
