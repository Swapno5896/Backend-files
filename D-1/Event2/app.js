const MyEvent = require('./myEvent');
const myEvent = new MyEvent


myEvent.on('event1', () => {
 console.log('event 1 is clicked')
})

myEvent.fun1()