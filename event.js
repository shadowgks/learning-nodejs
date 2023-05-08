const EventEmitter = require('events');
const emitter = new EventEmitter;

emitter.on('logging', (arg)=>{
    console.log('listener Called!', arg.data);
})

emitter.emit('logging', {data: 'hello everyone'});
