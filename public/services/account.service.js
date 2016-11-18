'use strict';

angular.module('genealogia')
  .factory('accountService', ['$http', '$httpParamSerializer',
    function ($http, $httpParamSerializer) {

      // public
      function create(account) {
        return $http({
            method: 'POST',
            url: '/api/accounts/yolo',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: $httpParamSerializer(account)
          });
      }

      return {
        create
      };
    }
  ]);
