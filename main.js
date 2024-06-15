var moment = require('moment');

var MyDate = new Date();
var MyDate1 = moment(MyDate).format('LL');

console.log(MyDate1);