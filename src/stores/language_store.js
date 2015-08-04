import { Store } from 'uflux'
import App from '../dispatcher'

export default new Store(App, [
  'ruby', 'javascript'
], {

  /**
   * Updates the language at index `idx` to `lang`.
   *
   *     App.emit('language:set', 1, 'ruby')
   */

  'language:set': (langs, idx, lang) => {
    App.emitAfter('language:renav')

    // replace it
    if (lang) langs[idx] = lang
    else langs.splice(idx, 1)

    // if it's the same, collapse into one
    if (langs[0] === langs[1] && langs.length === 2)
      return [ langs[0] ]

    return langs
  },

  /**
   * Private: renavigates the page.
   */

  'language:renav': (langs) => {
    console.log('renav:', '/' + langs.join('/'))
  }
})
