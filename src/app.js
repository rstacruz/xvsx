(function () {

  var CodeView = require('./views/code');

  $.get('programming.json')
  .then(function (data) {
    var view = new CodeView({
      el: document.body,
      data: {
        languages: ['ruby', 'javascript'],
        data: data
      },
    });
  });

})();
