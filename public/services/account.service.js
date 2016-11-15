'use strict';

angular.module('genealogia')
  .factory('accountService', ['$http', '$httpParamSerializer', '$log', 'messageService',
    function ($http, $httpParamSerializer, $log, messageService) {

      //private
      function handleSuccess(response) {
        $log.debug('account creation successfull: ', response);
        return response.data;
      }

      function handleError(response) {
        $log.warn('account creation failed: ', response);
        return messageService.createErrorMessage('Http status ' + response.status, response.data);
      }

      // public
      function create(account) {
        return $http({
            method: 'POST',
            url: '/api/accounts/',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: $httpParamSerializer(account)
          })
          .then(handleSuccess)
          .catch(handleError);
      }

      return {
        create
      };
    }
  ]);
