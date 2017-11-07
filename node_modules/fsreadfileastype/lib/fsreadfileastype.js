var fs = require('fs');
var _ = require('underscore');
var shellVarParser = require('shellvarparser');




var readFile = function(path, type){
  var typeProcesses = {
    json: function(value){
      return JSON.parse(value);
    }
  , shell: function(value){
      return shellVarParser.parse(value);
    }
  }

  var processType = typeProcesses[type]
  var value = fs.readFileSync(path, 'utf8');

  return processType(value);
}

var fsReadFileAsType = {

  sync: function(path, type){
    return readFile(path, type);
  }

}

module.exports = fsReadFileAsType;