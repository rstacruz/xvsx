var diff = require('diff');

exports.merge = merge;
exports.mergePair = mergePair;

/*
 * Merges multiple languages into one outline.
 *
 *     merge([
 *       { "X": { a: {}, b: {}, c: {} } },
 *       { "X": { a: {}, b: {}, d: {} } },
 *     ]);
 *     //=> { "X": { a: {}, b: {}, c: {}, d: {} } },
 */

function merge (list) {
  var left = {};

  list.forEach(function (item) {
    if (!left)
      left = item;
    else
      left = mergePair(left, item);
  });

  return left;
}

/*
 * Merges a pair of 2 languages. Used internally by merge().
 */

function mergePair (left, right) {
  var text = [
    textify(left),
    textify(right)
  ];

  var changes = diff.diffLines(text[1], text[0]);
  var result = '';

  changes.forEach(function (change) {
    // change.added, change.removed
    result += change.value;
  });

  return untextify(result);
};

/*
 * Converts an outline object into text so that it can be diffed.
 *
 *     textify({ "X": { a: {}, b: {}, c: {} } })
 *
 *     // result:
 *     // ## X
 *     // ### X > a
 *     // ### X > b
 *     // ### X > c
 */

function textify (obj) {
  return mapObject(obj, function (val, h2) {
    var head = "## " + h2 + "\n";
    var body = mapObject(val, function (val, h3) {
      return "### " + h2 + " > " + h3 + "\n";
    }).join("");

    return head + body;
  }).join("");
};

/*
 * Converts a text output of textify() back to an outline object.
 *
 *     untextify("## X\n### X > a\n### X > b\n### X > c\n");
 *     //=> { "X": { a: {}, b: {}, c: {} } }
 */

function untextify (text) {
  var result = {};
  var current;

  text.trim().split("\n").forEach(function (line) {
    var m;
    if (m = line.match(/^## (.*)$/)) {
      current = {};
      result[m[1]] = current;
    } else if (m = line.match(/^### (.*) > (.*)$/)) {
      current[m[2]] = {};
    }
  });

  return result;
}

/*
 * Map helper
 */

function mapObject (obj, fn) {
  return Object.keys(obj).map(function (key) {
    var val = obj[key];
    return fn(val, key);
  });
}
