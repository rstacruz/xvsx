var jQuery = require('jquery');
var Ractive = require('ractive');

$.ajax('data/programming.json', function (data) {
  console.log(data);
});
