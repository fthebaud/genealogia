'use strict';

// retreiving the genealogia application module
angular.module('genealogia')
  // register a component definition. a component can be seen as a stripped down version of a directive
  .component('familyMemberForm', {
    templateUrl: 'components/family-member-form/family-member-form.template.html',
    controller:  ['$log', '$http', function ($log, $http) {
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
