const Message = require("../models/Message");

function getMessages() {
  return Message.findAll();
}

function getMessageByTS(messageTS) {
  return Message.findAll({
    where: {
      ts: messageTS,
    },
  });
}

function createMessage(textMessage, author) {
  return Message.create({
    message: textMessage,
    author: author,
    ts: new Date().getTime(),
  });
}

function updateMessage(textMessage, messageTS) {
  return Message.update(textMessage, { where: { ts: messageTS } });
}

function deleteMessage(messageTS) {
  return Message.destroy({
    where: {
      ts: messageTS,
    },
  });
}

exports.getMessages = getMessages;
exports.getMessageByTS = getMessageByTS;
exports.createMessage = createMessage;
exports.updateMessage = updateMessage;
exports.deleteMessage = deleteMessage;