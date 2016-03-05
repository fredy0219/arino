var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');
var net = require('net');
var crypto = require('crypto');

var Sleep = function(ms) {
	var e = new Date().getTime() + ms;
	while (new Date().getTime() <= e) ;
};

var ShowHelp = function() {
	console.log("Usage -f filename [-h hostname] [-p port]");
	console.log();
	console.log("Options:");
	console.log("    -f filename        enter hex filename");
	console.log("    -h hostname/ip     enter hostname/ip (default mylinkit.local)");
	console.log("    -p port            enter arino server port (default 7689)");
	console.log();
	process.exit();
}

if (typeof argv.f === "undefined") {
	ShowHelp();
}

fileHex = argv.f;

try {
	fs.statSync(fileHex);
} catch(err) {
	console.err(fileHex + " is not a file");
	process.exit();
}

var content;

fs.readFile(fileHex, (err, data) => {
	if (err) {
		console.error(err);
		process.exit();
	}
	content = data;
});

var hostname = typeof argv.h === "undefined" ? "mylinkit.local" : argv.h;
var port = typeof argv.p === "undefined" ? 7689 : argv.p;

var client = new net.Socket();

console.log('Wait connect to', hostname);

client.connect(port, hostname, function() {
	console.log('Connected, start send data and upload to arduino board');
	
	content = new Buffer(content).toString("base64");
	var hash = crypto.createHash("md5").update(content).digest("hex");
	var dataWrite = "HEX:" + hash + ":" + content;
	var sLength = dataWrite.length;
	for (line=0;line<=Math.round(sLength / 100);line++) {
		client.write(dataWrite.substring(line*100, (line*100) + 100));
		console.log("Upload", Math.round((line) / Math.round(sLength / 100) * 100), "%");
		Sleep(100);
	}
	client.write("\r\n");
});

client.on('data', function(data) {
	data = data.toString();
	var start = data.substring(0, 3);
	var content = data.substring(4);
	if (start=="ERR") {
		console.error(content);
		client.end();
	} else {
		process.stdout.write(content);
	}
});

client.on('close', function() {
	process.exit();
});