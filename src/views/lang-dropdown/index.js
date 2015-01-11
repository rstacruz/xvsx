module.exports = Ractive.extend({
  template: require('./template.html'),

  updateLanguage: function (idx, lang) {
    App.nav.update(idx, lang);
  }
});
