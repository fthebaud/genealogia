'use strict';

angular.module('genealogia')
  .component('signupScreen', {
    templateUrl: 'components/signup-screen/signup-screen.template.html',
    controller: ['$http', '$httpParamSerializer', '$location', '$log', 'messageService',
        function ($http, $httpParamSerializer, $location, $log, messageService) {
        this.submitted = false;

        this.processForm = function (isValid) {
          this.submitted = true;
          // If the form is valid and the passwords are matching, we send a request to create a new account
          if (isValid && this.data.password1 === this.data.password2) {
            $log.log('signup : ', this.data);
            $http({
                method: 'POST',
                url: '/api/accounts',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: $httpParamSerializer(this.data)
              })
              .success(function (message) {
                $log.log(message);
                messageService.addMessage(message);
                $location.url('/login-screen');
              });
          }
        };
      }
    ],
    controllerAs: 'signUpCtrl'
  });
