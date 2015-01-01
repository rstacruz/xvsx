/* jshint sub: true */
var expect = require('chai').expect;
var outlinify = require('../lib/bundle').outlinify;

describe('bundle.outlinify with outline', function () {
  var src, outline, output;

  it('filters h2', function () {
    src = "#js\n## What";

    outline = {
      "Variables": { "Defining variables": {} }
    };

    expect(function () { outlinify(src, outline); })
      .to.throw(/h2 not found in outline: 'What'/);
  });

  it('filters h3', function () {
    src = "#js\n## Variables\n### What";

    outline = {
      "Variables": { "Defining variables": {} }
    };

    expect(function () { outlinify(src, outline); })
      .to.throw("h3 not found in outline: 'What' (in 'Variables')");
  });
});
