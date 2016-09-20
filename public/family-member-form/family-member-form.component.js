'use strict';

// retreiving the family member form module
angular.module('familyMemberForm')
  //register a component definition
  .component('familyMemberForm', {
    templateUrl: 'family-member-form/family-member-form.template.html',
    //TODO : eslint should give an error for the angular/di rule
    controller:  ['$http', function PersonFormController($log, $http) {
      this.reset = function () {
        $log.debug('reset');
        this.data = {};
      };

      this.save = function () {
        $http({
          method: 'POST',
          url: '/someUrl',
          data: this.data
        }).then(function successCallback(response) {
          console.log('test');
          // this callback will be called asynchronously
          // when the response is available
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
      };
    }],
    controllerAs: 'personForm'
  });
