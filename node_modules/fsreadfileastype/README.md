fsReadFileAsType
==============

![Build Status](https://travis-ci.org/createbang/fsReadFileAsType.png)

Parse the contents of files as JavaScript objects.

.env file
```sh
VAR1=foobar
VAR2=bazbang
```

.jsonfile file
```json
{
  "foo": "bar",
  "baz": "bang"
}
```

js file
```js
var fsReadFileAsType = require('fsreadfileastype');

var jsonData = fsReadFileAsType.sync(__dirname + '/.jsonfile', 'json');
// returns {foo: "bar", baz: "bang"}
var shellVarData = fsReadFileAsType.sync(__dirname + '/.env', 'shell');
// returns {VAR1: "foo", VAR2: "bar"}
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
