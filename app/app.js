// creating the main module
angular.module('genealogia', [])
  //create an register a controller in the genealogia module
  .controller('FormController', function FormController() {
    this.person = 'world';
  });
