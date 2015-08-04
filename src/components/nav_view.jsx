import React from 'react'
import c from 'classnames'
import map from 'dom101/map'
import { connectToStores } from 'uflux'

import App from '../dispatcher'
import LanguageStore from '../stores/language_store'
import LangDropdownView from '../components/lang_dropdown_view'

let Nav = React.createClass({
  propTypes: {
    languages: React.PropTypes.object,
    selected: React.PropTypes.arrayOf(React.PropTypes.string)
  },

  statics: {
    getStores: () => [ LanguageStore ],
    getPropsFromStores (stores) {
      return { selected: LanguageStore.getState() }
    }
  },

  getDefaultProps () {
    return {
      languages: window.Data.languages
    }
  },

  getInitialState () {
    return {
      dropdownVisible: false
    }
  },

  render () {
    return (<div className='navbar'>
      <div className={c('dropdowns', {
          '-visible': this.state.dropdownVisible,
          '-hidden': !this.state.dropdownVisible
      })}>
        <div className='container'>
          {map([0, 1], (i) => {
            return (<LangDropdownView
              idx={i}
              languages={this.props.languages}
              selected={this.props.selected[i] || this.props.selected[0]} />)
          })}
        </div>
      </div>

      <div className='container'>
        {map(this.props.selected, (lang, name, i) => {
          return (<div className={`lang -i${i + 1}`} key={i}>
            <button className={`lang-button -i${i + 1}`} onClick={this.toggleDropdown}>
              {this.props.languages[lang].title}
            </button>
          </div>)
        })}
      </div>

      <div className='right'>
        <button onClick={this.toggleCompact}>Compact</button>
      </div>
    </div>)
  },

  componentDidMount () {
    document.body.addEventListener('click', this.closeDropdown)
  },

  componentWillUnmount () {
    document.body.removeEventListener('click', this.closeDropdown)
  },

  /**
   * Toggles the dropdown. If `val` is given, it'll be set to that.
   */

  toggleDropdown (val) {
    if (typeof val === 'undefined') {
      val = !this.state.dropdownVisible
    }
    this.setState({ dropdownVisible: val })
  },

  /**
   * Closes the dorpdown.
   */

  closeDropdown () {
    this.toggleDropdown(false)
  },

  /**
   * Toggles compact mode.
   */

  toggleCompact () {
    App.emit('settings:toggle_layout')
  },

})

Nav = connectToStores(Nav)

export default Nav
