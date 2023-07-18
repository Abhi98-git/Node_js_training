const  fs = require("fs");
const path = __dirname + "/test2.txt";
const data = "This is a just a line of text.";


fs.open(path, "w", function(error, fd) {
	const buffer = new Buffer.from(data);

// syntax: 	buf.write(string, [offset], [length], [encoding])

	fs.write(fd, buffer, 0, buffer.length, null, function(err, written, buff) {
		if (err) {
			console.error("write err: " + err.message);
		} else {
			console.log("Success. Wrote " + written + " bytes.");
		}
	});
});
