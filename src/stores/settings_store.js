import { Store } from 'uflux'
import App from '../dispatcher'

export default new Store(App, {
  layout: 'compact'
}, {
  'settings:set': (state, key, val) => {
    return { ...state, [key]: val }
  },

  'settings:toggle_layout': (state) => {
    return { ...state,
      layout: (state.layout === 'default' ? 'compact' : 'default')
    }
  }
})
