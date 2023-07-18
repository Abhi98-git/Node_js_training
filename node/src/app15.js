
const  cp2 = require("child_process");

let child = cp2.spawn("dir", ["/s"]);

child.stdout.on("data", function (data) {
	console.log(data.toString());
});
