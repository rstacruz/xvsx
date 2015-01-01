var work = require('./presenter');

module.exports = Ractive.extend({
  template: require('./template.html'),
  computed: { work: function () { return work; } }
});
