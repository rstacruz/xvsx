import text from 'dom101/text'
import q from 'dom101/query-selector'

import LanguageStore from './language_store'

LanguageStore.listen((langs) => {
  let titles = langs.map((lang) => {
    return window.Data.languages[lang].title
  })

  text(q('title'), titles.join(' vs. '))
})
