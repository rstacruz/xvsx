import React from 'react'
import map from 'dom101/map'
import c from 'classnames'

import App from '../dispatcher'

const LangDropdown = React.createClass({
  propTypes: {

    /**
     * The index; this is 0 or 1.
     */

    idx: React.PropTypes.number,

    /**
     * The currently selected language. (eg: `"javascript"`)
     */

    selected: React.PropTypes.string,

    /**
     * All available languages.
     */

    languages: React.PropTypes.object
  },

  render () {
    return <div
      className={`lang-dropdown -i${this.props.idx + 1}`}
    >
      {map(this.props.languages, (lang, key, i) => {
        /* {..}, "javascript" */
        return <li key={key}>
          <button
            className={c({ '-active': this.isActive(key) })}
            onClick={this.updateLanguage(this.props.idx, key)}
          >
            {lang.title}
          </button>
        </li>
      })}
    </div>
  },

  /**
   * Checks if `key` is the active element.
   *
   *     isActive('javascript')
   */

  isActive (key) {
    return this.props.selected === key
  },

  updateLanguage (i, lang) {
    return function (e) {
      e.preventDefault()
      App.emit('language:set', i, lang)
    }
  }
})

export default LangDropdown
