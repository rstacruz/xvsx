/* jshint sub: true */
var expect = require('chai').expect;
var outlinify = require('../lib/bundle').outlinify;

describe('bundle.outlinify with outline', function () {
  var src, ctx, output;

  it('filters h2', function () {
    src = "#js\n## What";

    ctx = {
      name: "js",
      outline: {
        "Variables": { "Defining variables": {} }
      }
    };

    expect(function () { outlinify(src, ctx); })
      .to.throw(/js: h2 not found in outline: 'What'/);
  });

  it('filters h3', function () {
    src = "#js\n## Variables\n### What";

    ctx = {
      name: "js",
      outline: {
        "Variables": { "Defining variables": {} }
      }
    };

    expect(function () { outlinify(src, ctx); })
      .to.throw("js: h3 not found in outline: 'What' (in 'Variables')");
  });
});
