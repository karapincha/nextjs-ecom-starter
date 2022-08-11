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

## 02. Setup local domain for dev environment (MacOS)

1.  Run below command in `Terminal` to open `hosts` file.

```bash
sudo nano /etc/hosts # Enter computer password when asked
```

2.  Add below line at the end of the `hosts` file

```bash
127.0.0.1    ecommerce.local
```

3.  Save file and exit.

```
01. CTRL + O and Enter
02. CTRL + X
```

`Now our local domain is (https://ecommerce.local)`

<br />

## 03. Setup local HTTPS enabled dev server

1.  Create a file on `root folder` called `server.js`
2.  Put below code to the file

```bash
const { createServer } = require('https')
const { parse } = require('url')
const next = require('next')
const emoji = require('node-emoji')
const fs = require('fs')

const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const app = next({ dev, hostname, port })

const handle = app.getRequestHandler()

const httpsOptions = {
  key: fs.readFileSync(`./${hostname}-key.pem`),
  cert: fs.readFileSync(`./${hostname}.pem`),
}

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(port, (err) => {
    if (err) throw err
    console.log(
      '\x1b[32m',
      `${emoji.get(
        'popcorn'
      )} Ready — started http(s) enabled server on url: https://${hostname}:${port}`
    )
  })
})
```

3. Replace `"dev": "next dev",` with `"dev": "node server.js",` in `package.json` file.
4. Run `yarn dev`

<br />

## 04. Run CORS Disabled Chrome (MacOS)

_IMPORTANT: Make sure not to click "Yes" on making the opened browser as default browser as it'll replace your computers default chrome's data._

```bash
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```
