'use strict';

angular.module('genealogia')
  .component('signupScreen', {
    templateUrl: 'components/signup-screen/signup-screen.template.html',
    controller: ['$http', '$httpParamSerializer', '$log', function ($http, $httpParamSerializer, $log) {
      this.submitted = false;

      this.processForm = function (isValid) {
        this.submitted = true;
        if (isValid && this.data.password1 === this.data.password2) {
          $log.log('signup : ', this.data);
          $http({
              method: 'POST',
              url: '/api/users',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              data: $httpParamSerializer(this.data)
            })
            .success(function (data) {
              $log.log(data);
              if (!data.success) {
                $log.log('OK');
              }
              else {
                $log.log('KO');
              }
            });
        }
      };
    }],
    controllerAs: 'signUpCtrl'
  });
