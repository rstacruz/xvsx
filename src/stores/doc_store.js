import { Store } from 'uflux'
import App from '../dispatcher'
import Router from '../router'

import codePresenter from '../presenters/code_presenter'

let cache = {}

/**
 * Doc store.
 *
 * See codePresenter for how this looks like.
 */

export default new Store(App, {}, {
  // TODO: make uflux emit a store change event
  'language:confirm': (state, languages) => {
    let key = JSON.stringify([ window.Data, languages ])
    if (cache[key]) return cache[key]
    cache[key] = codePresenter(window.Data, languages)
    return cache[key]
  }
})
