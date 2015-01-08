var work = require('./presenter');

var memoize = require('underscore').memoize;

module.exports = Ractive.extend({
  template: require('./template.html'),
  computed: {
    work: wrap(work)
  },

  oninit: function () {
    console.log('=>', this.get('config.languages'));
  },

  cycle: function () {
    var langs = this.get('config.languages').join(',');
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

