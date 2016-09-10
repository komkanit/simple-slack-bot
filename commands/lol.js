var util = require('../util');

module.exports = function (param) {
  var message = 'ทดสอบ';
    util.postMessage(param.channel, message);
};
