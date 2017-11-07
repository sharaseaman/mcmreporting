var shellVarParser = require('../lib/shellVarParser');

var fileContents = fs.readFileSync(__dirname + '/.env', 'utf8');
var envVars = shellVarParser.parse(fileContents);

console.log(envVars);