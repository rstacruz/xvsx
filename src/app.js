var jQuery = require('jquery');
var $ = jQuery;
var Ractive = require('ractive');

$.get('programming.json')
.then(function (data) {
  console.log(data);
});
