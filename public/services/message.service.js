angular.module('genealogia')
  .factory('messageService', function () {
    var messages = [];

    var addMessage = function (message) {
      message.type = message.isError ? 'danger' : 'success';
      messages.push(message);
    };

    var getMessages = function () {
      return messages;
    };

    var closeMessage = function (index) {
      messages.splice(index, 1);
    };

    return {
      addMessage,
      getMessages,
      closeMessage
    };

  });
