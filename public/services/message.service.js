'use strict';

angular.module('genealogia')
  .factory('messageService', function () {
    //private
    let create = function (title, detail){
      return {
        title,
        detail
      };
    };

    let messages = [];

    // public
    let addMessage = function (message) {
      message.type = message.isError ? 'danger' : 'success';
      messages.push(message);
    };

    let getMessages = function () {
      return messages;
    };

    let closeMessage = function (index) {
      messages.splice(index, 1);
    };

    let createMessage = function (title, detail) {
      var msg = create(title, detail);
      msg.isError = false;
      return msg;
    };

    let createErrorMessage = function (title, detail) {
      var msg = create(title, detail);
      msg.isError = true;
      return msg;
    };

    return {
      addMessage,
      getMessages,
      closeMessage,
      createMessage,
      createErrorMessage
    };

  });
