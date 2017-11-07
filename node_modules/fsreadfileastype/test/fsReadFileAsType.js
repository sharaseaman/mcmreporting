var assert         = require('assert'),
    should         = require('should'),
    fs             = require('fs'),
    fsReadFileAsType = require('../lib/fsreadfileastype');

describe('fsReadFileAsType', function() {

  describe('json', function() {
    var data;

    before(function() {
      data = fsReadFileAsType.sync(__dirname + '/.jsonfile', 'json');
    });

    it('converts the contents of the file into a Javascript object literal', function() {
      (typeof data).should.eql('object');
    });

    it('should properly convert the values', function() {
      data.foo.should.eql('bar');
    });
  });

  describe('shell', function() {
    var data;

    before(function() {
      data = fsReadFileAsType.sync(__dirname + '/.env', 'shell');
    });

    it('converts the contents of the file into a Javascript object literal', function() {
      (typeof data).should.eql('object');
    });

    it('should properly convert the values', function() {
      data.VAR1.should.eql('foo');
    });
  });

});