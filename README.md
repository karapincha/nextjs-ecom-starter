This is a [Next.js](https://nextjs.org/) E-commerce project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

<br />

## 01. Setup localhost HTTPS (MacOS)

Navigate to project root folder through a CLI and run below commands one-by-one

```bash
brew install mkcert
mkcert -install
mkcert localhost
```

<br />

## 02. Setup localhost HTTPS enabled dev server

1.  Create a file on `root folder` called `server.js`
2.  Put below code to the file

```bash
const { createServer } = require("https");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync("./localhost-key.pem"),
  cert: fs.readFileSync("./localhost.pem"),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(
      "Ready - started http(s) enabled server on url: https://localhost:" + port
    );
  });
});
```

3. Run ```yarn dev```

<br />

## 03. Run CORS Disabled Chrome (MacOS)

_IMPORTANT: Make sure not to click "Yes" on making the opened browser as default browser as it'll replace your computers default chrome's data._

```bash
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```
