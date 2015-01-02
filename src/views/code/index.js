var work = require('./presenter');

var memoize = require('underscore').memoize;

var highlight = memoize(function (lang, code) {
  var out = hljs.highlight(lang, code);
  return out.value;
}, function (lang, code) {
  return lang + code;
});

module.exports = Ractive.extend({
  template: require('./template.html'),
  computed: {
    work: wrap(work),
    highlight: wrap(highlight)
  },

  oninit: function () {
    this.on('lol', function () { this.cycle(); });
  },

  cycle: function () {
    var langs = this.data.languages.join(',');
    if (langs === 'ruby,javascript')
      this.set('languages', ['ruby']);
    else if (langs === 'ruby')
      this.set('languages', ['javascript']);
    else if (langs === 'javascript')
      this.set('languages', ['ruby','javascript']);
  }
});

function wrap (fn) {
  return function () { return fn; };
}

