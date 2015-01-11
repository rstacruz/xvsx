module.exports = Ractive.extend({
  template: require('./template.html'),

  components: {
    langDropdown: require('../lang-dropdown')
  },

  data: {
    dropdownVisible: false
  },

  toggleDropdown: function () {
    var shown = this.get('dropdownVisible');
    shown = ! shown;
    this.set('dropdownVisible', shown);
  },

  computed: {
    titleize: function () {
      return function (lang) {
        return this.data.data.languages[lang].title;
      }
    }
  }
});
