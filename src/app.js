(function () {

  var Data;
  var CodeView = require('./views/code');
  var NavView = require('./views/nav');
  window.App = {};

  App.config = new Ractive({ data: {
    languages: ['ruby', 'javascript']
  }});

  page('/', function (ctx) {
    alert('home');
  });

  page('/:left/:right', function (ctx) {
    App.config.set('languages',
      [ctx.params.left, ctx.params.right]);
  });

  page({ hashbang: true });

  request
    .get('programming.json')
    .end(function (err, res) {
      Data = res.body;
      new NavView({
        el: document.getElementById('nav'),
        data: {
          config: App.config
        }
      });

      var view = new CodeView({
        el: document.getElementById('content'),
        data: {
          config: App.config,
          data: res.body
        },
      });
    });

})();
