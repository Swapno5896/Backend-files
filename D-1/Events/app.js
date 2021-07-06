const eventEmiter = require('events');
const emiter = new eventEmiter()

emiter.on('event1', (e) => {
    console.log('from event 1', e)
})
emiter.on('event2', (e) => {
    console.log('from event 2', e)
})

emiter.emit('event1', { name: 'swapno' })
