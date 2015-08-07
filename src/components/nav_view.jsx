import React from 'react'
import c from 'classnames'
import map from 'dom101/map'
import { connectToStores } from 'uflux'

import App from '../dispatcher'
import LanguageStore from '../stores/language_store'
import LangDropdownView from '../components/lang_dropdown_view'

let NavView = React.createClass({
  propTypes: {
    data: React.PropTypes.shape({
      languages: React.PropTypes.object
    }),
    selected: React.PropTypes.arrayOf(
      React.PropTypes.string
    )
  },

  statics: {
    getStores: () => [ LanguageStore ],
    getPropsFromStores () {
      return { selected: LanguageStore.getState() }
    }
  },

  getInitialState () {
    return {
      dropdownVisible: false
    }
  },

  render () {
    return (
      <div className='navbar'>
        {this.renderDropdowns()}
        {this.renderControls()}
      </div>
    )
  },

  renderDropdowns () {
    return (
      <div className={c('dropdowns', 'mega-dropdown',
        this.state.dropdownVisible ? '-visible' : '-hidden'
      )}>
        <div className='container'>
          {map([0, 1], (i) => {
            return (<LangDropdownView
              idx={i}
              languages={this.props.data.languages}
              selected={this.props.selected[i] || this.props.selected[0]} />)
          })}
        </div>
      </div>
    )
  },

  renderControls () {
    return (
      <div className='controls'>
        <div className='container'>
          {map(this.props.selected, (lang, name, i) => {
            return (
              <div className={`lang -i${i + 1}`} key={i}>
                <button
                  className={`lang-button -i${i + 1}`}
                  onClick={this.toggleDropdown}
                >
                  {this.props.data.languages[lang].title}
                </button>
              </div>
            )
          })}
        </div>

        <div className='right'>
          <button onClick={this.toggleCompact}>Compact</button>
        </div>
      </div>
    )
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
  }
})

NavView = connectToStores(NavView)

export default NavView
