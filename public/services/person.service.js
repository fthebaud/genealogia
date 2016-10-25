'use strict';

angular.module('genealogia')
  .factory('personService', ['$http',
    function ($http) {

      //private
      function handleResponse(response) {
        return response;
      }

      // public
      function create(person) {
        return $http({
          method: 'POST',
          url: '/api/person',
          data: person
        })
        .then(handleResponse)
        .catch(handleResponse);
      }

      return {
        create
      };
    }
  ]);
