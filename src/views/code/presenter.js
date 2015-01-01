var pluck = require('underscore').pluck;
var compact = require('underscore').compact;

module.exports = function (data, languages) {
  var langs = languages.map(function (lang) {
    return { id: lang };
  });

  var re = {
    languages: langs,
    sections: []
  };

  // each section
  re.sections = compact(map(data.outline, function (h2, suboutline) {

    // subsections
    var subs = compact(map(suboutline, function (h3, subsection) {

      // languages
      var langs = languages.map(function (lang) {
        var ld = data.languages[lang];
        var d = ld[h2] && ld[h2][h3];
        if (!d) return { lang: lang };

        return {
          language: lang,
          code: d.code,
          text: d.text
        };
      });

      if (compact(pluck(langs, 'code')).length === 0)
        return undefined;

      return {
        title: h3,
        languages: compact(langs)
      };
    }));

    if (subs.length > 0) {
      return {
        title: h2,
        subsections: subs
      };
    }
  }));

  return re;
};

function map (obj, fn) {
  return Object.keys(obj).map(function (key) {
    var val = obj[key];
    return fn(key, val);
  });
}
