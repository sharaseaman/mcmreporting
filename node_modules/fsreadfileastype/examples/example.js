var fsReadFileAsType = require('../lib/fsreadfileastype');

var jsonData = fsReadFileAsType.sync(__dirname + '/.jsonfile', 'json');
// returns {foo: "bar", baz: "bang"}
var shellVarData = fsReadFileAsType.sync(__dirname + '/.env', 'shell');
// returns {VAR1: "foo", VAR2: "bar"}