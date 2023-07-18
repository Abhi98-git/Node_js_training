const events = require("events");
const emitter = new events.EventEmitter();

function handler(msg) {
	console.log("In evt1 handler", msg);
}


emitter.on("evt1", handler);
emitter.on("evt1", handler);
emitter.emit("evt1", "test");
emitter.removeListener("evt1", handler);

emitter.emit("evt1", "test2");
