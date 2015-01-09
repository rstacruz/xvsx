module.exports = Ractive.extend({
  template: require('./template.html'),
  computed: {
    titleize: function () {
      return function (lang) {
        return this.data.data.languages[lang].title;
      }
    }
  },
  oninit: function () {
  }
});
