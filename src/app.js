import React from 'react'
import remove from 'dom101/remove'

window.App = {
  Dispatcher: require('./dispatcher'),
  LanguageStore: require('./stores/language_store'),
  SettingsStore: require('./stores/settings_store'),
  TitleStore: require('./stores/title_store'),
  Router: require('./router')
}

remove(document.getElementById('loader'))
