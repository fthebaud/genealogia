'use strict';

angular.module('genealogia')
  .factory('accountService', ['$http', '$httpParamSerializer',
    function ($http, $httpParamSerializer) {

      //private
      function handleResponse(response) {
        return response.data;
      }

      // public
      function create(account) {
        return $http({
            method: 'POST',
            url: '/api/accounts',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: $httpParamSerializer(account)
          })
          .then(handleResponse)
          .catch(handleResponse);
      }

      return {
        create
      };
    }
  ]);
