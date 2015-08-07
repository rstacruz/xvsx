import remove from 'dom101/remove'
import React from 'react'

window.App = {
  Dispatcher: require('./dispatcher'),
  LanguageStore: require('./stores/language_store'),
  SettingsStore: require('./stores/settings_store'),
  TitleStore: require('./stores/title_store'),
  DocStore: require('./stores/doc_store'),
  Router: require('./router')
}

import RootView from './components/root_view'
React.render(<RootView />, document.getElementById('all'))

remove(document.getElementById('loader'))
