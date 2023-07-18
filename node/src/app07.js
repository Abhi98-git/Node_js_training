
const events = require("events");
const emitter = new events.EventEmitter();
emitter.setMaxListeners(1); 

const username = "nodeUser2";
const password = "password";

emitter.emit("userAdded", username, password);


emitter.on("userAdded", function(uname, pword) {
	console.log("Added user " + uname);
});
emitter.on("userAdded", function(uname, pword) {
	console.log("Added user again " + uname);
});

// add the user & then emit an event
emitter.emit("userAdded", username, password);
emitter.emit("userAdded", username, password);
emitter.emit("userAdded", username, password);