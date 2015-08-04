import { Store } from 'uflux'
import App from '../dispatcher'
import Router from '../router'

import codePresenter from '../presenters/code_presenter'

/**
 * Doc store.
 *
 * See codePresenter for how this looks like.
 */

export default new Store(App, {}, {
  // TODO: make uflux emit a store change event
  'language:confirm': (state, languages) => {
    console.log('lang confirm:', languages)
    const result = codePresenter(window.Data, languages)
    return result
  }
})
