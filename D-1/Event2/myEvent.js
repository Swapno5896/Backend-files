const EventEmiter = require('events');
class MyEvent extends EventEmiter {
 fun1 = () => {
  this.emit('event1')
 }
}

module.exports = MyEvent