var util = require('../util');
var moment = require('moment');

module.exports = function (param) {
  
    var message = "กราบบบบ โหดจริมๆ";
    util.postmessage(param.channel, message);
};