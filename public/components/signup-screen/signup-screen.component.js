'use strict';

angular.module('genealogia')
  .component('signupScreen', {
    templateUrl: 'components/signup-screen/signup-screen.template.html',
    controller: ['$location', 'accountService', 'messageService',
      function ($location, accountService, messageService) {
        this.submitted = false;
        //Gestion de l'affichage des alertes sur creation d'un nouveau compte
        this.messages = messageService.getMessages();
        this.closeMessage = function (index) {
          messageService.closeMessage(index);
          this.messages = messageService.getMessages();
        };

        this.processForm = function (isValid) {
          this.submitted = true;
          // If the form is valid and the passwords are matching, we send a request to create a new account
          if (isValid && this.data.password1 === this.data.password2) {
            accountService.create(this.data)
            .then(function (message) {
              messageService.addMessage(message);
              $location.url('/login-screen');
            });
          }
        };
      }
    ],
    controllerAs: 'signUpCtrl'
  });
