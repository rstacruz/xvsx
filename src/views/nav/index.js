var removeClass = require('dom101/remove-class');
var addClass = require('dom101/add-class');

module.exports = Ractive.extend({
  template: require('./template.html'),

  components: {
    langDropdown: require('../lang-dropdown')
  },

  data: {
    dropdownVisible: false,
    compact: false
  },

  toggleDropdown: function () {
    this.set('dropdownVisible', ! this.get('dropdownVisible'));
  },

  toggleCompact: function () {
    this.set('compact', ! this.get('compact'));
  },

  observers: {
    compact: function (val) {
      if (val) addClass(document.body, '-layout-compact');
      else removeClass(document.body, '-layout-compact');
    }
  },

  computed: {
    titleize: function () {
      return function (lang) {
        return this.data.data.languages[lang].title;
      };
    }
  },

  oninit: function () {
    this.observe(this.observers);
  }
});
