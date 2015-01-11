(function () {

  var text = require('dom101/text');
  var q = require('dom101/query-selector');

  var CodeView = require('./views/code');
  var NavView = require('./views/nav');
  window.App = {};

  /*
   * Config
   */

  App.config = new Ractive({ data: {
    languages: ['ruby', 'javascript']
  }});

  /*
   * change title
   */

  App.config.observe('languages', function (langs) {
    var titles = langs.map(function (lang) {
      return Data.languages[lang].title;
    });

    text(q('title'), titles.join(' vs. '));
  });


  /*
   * Navigation helpers
   */

  App.nav = {};

  /*
   * Changes languages. Updates index `idx` to language `lang`.
   *
   *     App.nav.update(0, 'javascript');
   *     App.nav.update(1, 'python');
   *     App.nav.update(1, null);
   */

  App.nav.update = function (idx, lang) {
    var langs = App.config.get('languages');

    // replace it
    if (lang) langs[idx] = lang;
    else langs.splice(idx, 1);

    // if it's the same, collapse into one
    if (langs[0] === langs[1] && langs.length === 2)
      langs = [ langs[0] ];

    // navigate
    page('/' + langs.join('/'));
  };

  /*
   * Routes
   */

  page('/', function (ctx) {
  });

  page('/:left', function (ctx) {
    App.config.set('languages',
      [ctx.params.left]);
  });

  page('/:left/:right', function (ctx) {
    App.config.set('languages',
      [ctx.params.left, ctx.params.right]);
  });

  /*
   * Views
   */

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

  /*
   * Start the router
   */

  page.base(location.pathname.replace(/\/$/,''));
  page({ hashbang: true });

})();
