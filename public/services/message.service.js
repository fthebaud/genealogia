'use strict';

angular.module('genealogia')
  .factory('messageService', function () {
    let messages = [];

    // public
    let addMessage = function (message) {
      message.type = message.isError ? 'danger' : 'success';
      messages.length = 0; // pas plus d'un message à la fois ?
      messages.push(message);
    };

    let getMessages = function () {
      return messages;
    };

    let closeMessage = function (index) {
      messages.splice(index, 1);
    };

    let createMessage = function (httpStatus, httpStatusText, text) {
      return {
        title: httpStatus === 200 ? 'Success!' : httpStatus + ' ' + httpStatusText,
        detail: text,
        isError: httpStatus !== 200
      };
    };

    let createAndAddMessage = function (httpStatus, httpStatusText, text) {
      let msg = createMessage(httpStatus, httpStatusText, text);
      addMessage(msg);
    };

    return {
      addMessage,
      getMessages,
      closeMessage,
      createMessage,
      createAndAddMessage
    };

  });
