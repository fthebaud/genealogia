'use strict';

// retreiving the genealogia application module
angular.module('genealogia')
  // register a component definition. a component can be seen as a stripped down version of a directive
  .component('familyMemberForm', {
    templateUrl: 'components/family-member-form/family-member-form.template.html',
    controller:  ['personService', '$log', function (personService, $log) {
      //RESET
      this.reset = function () {
        $log.debug('reset');
        this.data = {};
      };
      //SAVE
      this.save = function () {
        let res = personService.create(this.date);
        $log.log(res);
      };
    }],
    controllerAs: 'personForm'
  });
