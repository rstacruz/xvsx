import React from 'react'
import remove from 'dom101/remove'

remove(document.getElementById('loader'))

window.App = {
  Dispatcher: require('./dispatcher'),
  LanguageStore: require('./stores/language_store'),
  SettingsStore: require('./stores/settings_store'),
  TitleStore: require('./stores/title_store')
}

import ChromeView from './components/chrome_view'
React.render(<ChromeView />, document.getElementById('all'))
