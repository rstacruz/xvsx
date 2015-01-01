/* jshint sub: true */
var expect = require('chai').expect;

var outlinify = require('../lib/bundle').outlinify;

describe('bundle.outlinify with errors', function () {
  var output, outline, src;

  it('fails when no h2 is found', function () {
    src = "### Defining variables";

    expect(function () { outlinify(src); })
      .to.throw(/h3 found without h2/);
  });
});
