(function () {

  var CodeView = require('./views/code');
  var NavView = require('./views/nav');

  request
    .get('programming.json')
    .end(function (err, res) {
      new NavView({
        el: document.getElementById('nav')
      });

      var view = new CodeView({
        el: document.getElementById('content'),
        data: {
          languages: ['ruby', 'javascript'],
          data: res.body
        },
      });
    });

})();
