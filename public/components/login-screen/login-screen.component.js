'use strict';

angular.module('genealogia')
  .component('loginScreen', {
    templateUrl: 'components/login-screen/login-screen.template.html',
    controller: ['$location', '$routeParams', '$log', 'messageService',
      function ($location, $routeParams, $log, messageService) {
        //Gestion de l'affichage des alertes sur cr�ation d'un nouveau compte
        this.messages = messageService.getMessages();

        this.closeMessage = function (index) {
          messageService.closeMessage(index);
          this.messages = messageService.getMessages();
        };

        this.signIn = function () {
          $log.log('login!');
          $location.path('/family-member-form');
        };

        this.goToSignUp = function () {
          $log.log('gotosignup');
          $location.path('/sign-up');
        };
      }
    ],
    controllerAs: 'loginCtrl'
  });
