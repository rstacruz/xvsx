(function () {

  var CodeView = require('./views/code');

  console.log('start');

  request
    .get('programming.json')
    .end(function (err, res) {
      var view = new CodeView({
        el: document.body,
        data: {
          languages: ['ruby', 'javascript'],
          data: res.body
        },
      });
    });

})();
