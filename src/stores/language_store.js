import { Store } from 'uflux'
import App from '../dispatcher'
import Router from '../router'

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
    langs[idx] = lang
    return langs
  },

  /**
   * Emitted when languages are changed
   * 
   *     'language:confirm': (state, langs) => {
   *       // langs == ['ruby', 'javascript']
   *     }
   */

  'language:confirm': (langs, newLangs) => {
    return newLangs
  },

  /**
   * Private: renavigates the page.
   */

  'language:renav': (langs) => {
    Router.replaceWith('compare', { left: langs[0], right: langs[1] })
  }
})
