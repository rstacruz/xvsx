(function () {

  var text = require('dom101/text');
  var q = require('dom101/query-selector');

  var CodeView = require('./views/code');
  var NavView = require('./views/nav');
  window.App = {};

  App.config = new Ractive({ data: {
    languages: ['ruby', 'javascript']
  }});

  App.config.observe('languages', function (langs) {
    var titles = langs.map(function (lang) {
      return Data.languages[lang].title;
    });

    text(q('title'), titles.join(' vs. '));
  });

  page('/', function (ctx) {
  });

  page('/:left/:right', function (ctx) {
    App.config.set('languages',
      [ctx.params.left, ctx.params.right]);
  });

  new NavView({
    el: document.getElementById('nav'),
    data: {
      config: App.config,
      data: window.Data
    }
  });

  var view = new CodeView({
    el: document.getElementById('content'),
    data: {
      config: App.config,
      data: window.Data
    },
  });

  page.base(location.pathname);
  page({ hashbang: true });

})();
