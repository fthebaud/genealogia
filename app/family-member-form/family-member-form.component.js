// retreiving the family member form module
angular.module('familyMemberForm')
  //register a component definition
  .component('familyMemberForm', {
    templateUrl: 'app/family-member-form/family-member-form.template.html',
    controller: function PersonFormController() {
      this.what = 'world';
    },
    controllerAs: 'personForm'
  });
