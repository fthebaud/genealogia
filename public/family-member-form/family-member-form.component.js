'use strict';

// retreiving the family member form module
angular.module('familyMemberForm')
  //register a component definition
  .component('familyMemberForm', {
    templateUrl: 'family-member-form/family-member-form.template.html',
    controller:  ['$log', '$http', function PersonFormController($log, $http) {
      //RESET
      this.reset = function () {
        $log.debug('reset');
        this.data = {};
      };
      //SAVE
      this.save = function () {
        $http({
          method: 'POST',
          url: '/api/person',
          data: this.data
        }).then(function successCallback(response) {
          $log('succes' + response);
        }, function errorCallback(response) {
          $log('erreur' + response);
        });
      };
    }],
    controllerAs: 'personForm'
  });
