/* jshint sub: true */
var expect = require('chai').expect;
var outlinify = require('../lib/bundle').outlinify;

describe('work', function () {
  var work = require('../lib/bundle').work;
  var output;

  before(function () {
    output = work([
      'data/programming/ruby.md',
      'data/programming/javascript.md'
    ]);
  });

  xit('echo', function () {
    console.log(output);
  });

  it('has comments', function () {
    expect(output['-']).have.length.gt(1);
  });

  it('says it\'s autogenerated', function () {
    var comment = output['-'].join("\n");
    expect(comment).match(/This file is autogenerated/);
  });

  it('exports ruby language meta', function () {
    expect(output.languages.ruby).be.an('object');
  });

  it('exports ruby language bundle', function () {
    expect(output.languages.ruby.bundle).eql('programming');
  });

  it('exports ruby language title', function () {
    expect(output.languages.ruby.title).eql('Ruby');
  });

  it('has bundles', function () {
    expect(output.bundles).be.an('object');
  });

  it('has programming bundle', function () {
    expect(output.bundles.programming).be.an('object');
  });
});

describe('bundle.outlinify', function () {
  var h2, h3, src, output, sections;

  it('is a function', function () {
    expect(outlinify).to.be.a('function');
  });

  before(function () {
    src = [
      "# JavaScript",
      "",
      "* Bundle: programming",
      "",
      "## Variables",
      "### Defining variables",
      "    var x = 1",
      "",
      "Yes it works"
    ].join("\n");
  });

  beforeEach(function () {
    output = outlinify(src);
    sections = output.sections;
  });

  beforeEach(function () {
    h2 = sections['Variables'];
    h3 = h2['Defining variables'];
  });

  it('exports meta.title', function () {
    expect(output.meta.title).eql("JavaScript");
  });

  it('exports meta.bundle', function () {
    expect(output.meta.bundle).eql("programming");
  });

  it('is an object', function () {
    expect(sections).to.be.an('object');
  });

  it('exports h2', function () {
    expect(Object.keys(sections)).eql(['Variables']);
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
