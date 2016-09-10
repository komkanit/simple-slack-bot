var util = require('../util');
var moment = require('moment');

module.exports = function (param) {
    var day = {
      'Monday': 'วันจันทร์',
      'Tuesday': 'วันอังคาร',
      'Wendnesday': 'วันพุธ',
      'Thursday': 'วันพฤหัส',
      'Friday': 'วันศุกร์',
    }
    var message = [
      'อรุณสวัสด์จ้าา',
      'สวัสดีวัน'+day[moment().format("dddd")]+' ขอให้สุขสุดๆ จุดหมายใดๆให้สมประสงค์จ้า'
    ]
    var random = Math.floor((Math.random() * 2));
    util.postMessage(param.channel, message[1]);
};