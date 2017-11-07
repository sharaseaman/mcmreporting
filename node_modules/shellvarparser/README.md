shellVarParser
==============

![Build Status](https://travis-ci.org/createbang/shellVarParser.png)

Parse shell constant variables into a Javascript object.

Convert the contents of a shell constant variables file to a JavaScript object literal.

.env file
```sh
ENV_VAR1=foobar
ENV_VAR2=bazbang
```

js file
```js
var shellVarParser = require('shellVarParser');

var fileContents = fs.readFileSync(__dirname + '/.env', 'utf8');
var envVars = shellVarParser.parse(fileContents)

// returns {ENV_VAR1: "foobar", ENV_VAR2: "bazbang"}
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Running tests

```bash
npm install
npm test
```
