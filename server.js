const { createServer } = require("https");
const { parse } = require("url");
const next = require("next");
const emoji = require("node-emoji");
const fs = require("fs");

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const hostname = "ecommerce.local";
const app = next({ dev, hostname, port });

const handle = app.getRequestHandler();

const httpsOptions = {
	key: fs.readFileSync("./ecommerce.local-key.pem"),
	cert: fs.readFileSync("./ecommerce.local.pem"),
};

app.prepare().then(() => {
	createServer(httpsOptions, (req, res) => {
		const parsedUrl = parse(req.url, true);
		handle(req, res, parsedUrl);
	}).listen(port, (err) => {
		if (err) throw err;
		console.log(
			"\x1b[32m",
			`${emoji.get(
				"popcorn"
			)} Ready — started http(s) enabled server on url: https://${hostname}:${port}`
		);
	});
});
