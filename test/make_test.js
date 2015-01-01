/* jshint sub: true */
var expect = require('chai').expect;
var outlinify = require('../lib/bundle').outlinify;
var exec = require('exec');

describe('make', function () {
  it('building data works', function (done) {
    exec('make -B data'.split(' '), function(err, out, code) {
      if (code !== 0 || err !== '') {
        console.log(err);
        console.log(out);
        throw new Error("make failed with exit code: " + code);
      }

      done();
    });
  });
});
