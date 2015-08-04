var pluck = require('lodash').pluck
var compact = require('lodash').compact

/*
 * Usage:
 *
 *     data = {
 *       bundles: { ... },
 *       languages: { ... }
 *     }
 *     codePresenter(data, ['javascript', 'ruby'])
 *     
 * Returns:
 *
 *     languages:
 *     sections:
 *       - title: '...'
 *         subsections:
 *           - title: '...'
 *             languages:
 *               - language: ''
 *                 text: ''
 *                 code: ''
 */

module.exports = function (data, languages) {
  var bundleName = getBundleName(data, languages)

  var langs = languages.map((lang) => { return { id: lang } })

  var re = {
    languages: langs,
    sections: []
  }

  var bundle = data.bundles[bundleName]

  // each section
  re.sections = compact(map(bundle.outline, (h2, suboutline) => {

    // subsections
    var subs = compact(map(suboutline, (h3, subsection) => {

      // languages
      var langs = languages.map(function (lang) {
        var ld = bundle.languages[lang]
        var d = ld[h2] && ld[h2][h3]
        if (!d) return { lang: lang }

        return {
          language: lang,
          code: d.code,
          text: d.text
        }
      })

      // if the subsection has no code, suck it
      if (compact(pluck(langs, 'code')).length === 0) {
        return
      }

      // if it has the same code on both, suck it
      // this happens when comparing javascript with javascript-legacy
      if (langs[0].code === langs[1].code) {
        return
      }

      let hasText = langs.map((l) => l.text).join('').length > 0

      return {
        title: h3,
        hasText: hasText,
        languages: compact(langs)
      }
    }))

    if (subs.length > 0) {
      return {
        title: h2,
        subsections: subs
      }
    }
  }))

  return re
}

/*
 * Map helper that works with objects
 */

function map (obj, fn) {
  return Object.keys(obj).map(function (key) {
    var val = obj[key]
    return fn(key, val)
  })
}

/*
 * helper
 *
 *     getBundleName({...}, ['ruby', 'javascript'])
 *     //=> "programming"
 */

function getBundleName (data, languages) {
  var name

  languages.forEach(function (lang) {
    var _name =
      data.languages[lang] &&
      data.languages[lang].bundle

    if (!name) {
      name = _name
    } else if (name !== _name) {
      throw new Error('Not in the same bundle')
    }
  })

  return name
}
