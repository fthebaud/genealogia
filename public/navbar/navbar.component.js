angular.module('genealogia')
  .component('navbar', {
    templateUrl: 'navbar/navbar.template.html',
    controller: ['$location', '$log', function ($location, $log) {
      this.isActive = function (viewLocation) {
        $log.log(viewLocation);
        return viewLocation === $location.path();
      };
    }],
    controllerAs: 'navbarCtrl'
  });
