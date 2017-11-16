**Installation**
---
$ npm i - to install node packages

#### copy env

$ cp .env.sample .env

#### production mode

$ npm run build - to build project.
$ npm start - to start node.js server

#### development mode

$ npm run dev - quick start dev server with ssr
$ npm run dev2 - quick start dev server without ssr

**Code style**
---
#### Prettier config
https://github.com/prettier/prettier

We recommend to install it globally and add as an external tool to
WebStorm as it described in section below:

https://prettier.io/docs/en/webstorm.html

We gonna use this custom settings in prettier:
- trailing comma,
- no semicolons,
- single quotes,
- print width 100.

To add them you need to add this string to 'Parameters' field in WebStorm external tools configuration:

`--trailing-comma es5 --print-width 100 --single-quote --no-semi`
