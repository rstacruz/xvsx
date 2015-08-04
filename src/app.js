import React from 'react'
import remove from 'dom101/remove'

window.App = {
  Dispatcher: require('./dispatcher'),
  Language: require('./stores/language')
}

let App = window.App.Dispatcher
import Chrome from './components/chrome'
React.render(React.createElement(Chrome), document.getElementById('all'))
remove(document.getElementById('loader'))

// App.config.observe('languages', function (langs) {
//   var titles = langs.map(function (lang) {
//     return Data.languages[lang].title;
//   });

//   text(q('title'), titles.join(' vs. '));
// });
