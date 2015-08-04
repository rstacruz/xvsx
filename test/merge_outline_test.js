/* jshint sub: true */
var expect = require('chai').expect;
var merge = require('../lib/merge').merge;
var mergePair = require('../lib/merge').mergePair;

var j = JSON.stringify;

describe('mergePair', function () {
  it('works', function () {
    var out = mergePair(
      { "X": { a: {}, b: {}, c: {} } },
      { "X": { a: {}, b: {}, c: {}, o: {} } }
    );

    expect(out).eql({
      "X": { a: {}, b: {}, c: {}, o: {} }
    });
  });
});

describe('merge', function () {
  it('works with 0', function () {
    expect(merge([])).eql({});
  });

  it('works with 1', function () {
    var out = merge([
      { "X": { a: {}, b: {}, c: {} } }
    ]);

    expect(j(out)).eql(j({
      "X": { a: {}, b: {}, c: {} }
    }));
  });

  it('works with 2', function () {
    var out = merge([
      { "X": { a: {}, b: {}, c: {} } },
      { "X": { a: {}, b: {}, c: {}, o: {} } }
    ]);

    expect(j(out)).eql(j({
      "X": { a: {}, b: {}, c: {}, o: {} }
    }));
  });

  it('works with 3', function () {
    var out = merge([
      { "X": { a: {}, b: {}, c: {} } },
      { "X": { a: {}, b: {}, c: {}, o: {} } },
      { "X": { a: {}, b: {}, z: {}, c: {} } }
    ]);

    expect(j(out)).eql(j({
      "X": { a: {}, b: {}, z: {}, c: {}, o: {} }
    }));
  });

  it('works with ambiguous h3 additions', function () {
    var out = merge([
      { "X": { a: {}, b: {}, c: {} } },
      { "X": { a: {}, b: {}, o: {} } },
      { "X": { a: {}, b: {}, z: {} } }
    ]);

    expect(j(out)).eql(j({
      "X": { a: {}, b: {}, c: {}, o: {}, z: {} }
    }));
  });

  it('works with h2 additions', function () {
    // shouldnt this work the other way around?
    var out = merge([
      { "X": { a: {}, b: {} } },
      { "Y": { a: {}, b: {} } }
    ]);

    expect(j(out)).eql(j({
      "X": { a: {}, b: {} },
      "Y": { a: {}, b: {} },
    }));
  });
});

