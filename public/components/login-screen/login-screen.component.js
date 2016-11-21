'use strict';

angular.module('genealogia')
  .component('loginScreen', {
    templateUrl: 'components/login-screen/login-screen.template.html',
    controller: ['$location', '$routeParams', 'messageService', 'accountService',
      function ($location, $routeParams, messageService, accountService) {
        //Gestion de l'affichage des alertes sur creation d'un nouveau compte
        this.messages = messageService.getMessages();
        this.closeMessage = function (index) {
          messageService.closeMessage(index);
          this.messages = messageService.getMessages();
        };

        this.signIn = function () {
          accountService.check(this.data)
          .then(response => {
            messageService.createAndAddMessage(response.status, response.statusText, response.data);
          })
          .catch(response => {
            messageService.createAndAddMessage(response.status, response.statusText, response.data);
          });
          //$location.path('/family-member-form');
        };

      }
    ],
    controllerAs: 'loginCtrl'
  });
