/* jshint sub: true */
var expect = require('chai').expect;
var outlinify = require('../lib/bundle').outlinify;

describe('bundle.outlinify', function () {
  var h2, h3, src, output;

  it('is a function', function () {
    expect(outlinify).to.be.a('function');
  });

  before(function () {
    src = [
      "# js",
      "## Variables",
      "### Defining variables",
      "    var x = 1",
      "",
      "Yes it works"
    ].join("\n");
  });

  beforeEach(function () {
    output = outlinify(src);
  });

  beforeEach(function () {
    h2 = output['Variables'];
    h3 = h2['Defining variables'];
  });

  it('is an object', function () {
    expect(output).to.be.an('object');
  });

  it('exports h2', function () {
    expect(Object.keys(output)).eql(['Variables']);
  });

  it('exports h3', function () {
    expect(Object.keys(h2)).eql(['Defining variables']);
  });

  it('exports h3 code', function () {
    expect(h3.code).eql(
      '<span class="hljs-keyword">var</span>' +
      ' x = <span class="hljs-number">1</span>');
  });

  it('exports h3 text', function () {
    expect(h3.text).eql('<p>Yes it works</p>\n');
  });
});
