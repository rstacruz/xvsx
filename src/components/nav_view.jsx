import React from 'react'
import c from 'classnames'
import map from 'dom101/map'

import App from '../dispatcher'
import LangDropdownView from '../components/lang_dropdown_view'

let Nav = React.createClass({
  propTypes: {
    data: React.PropTypes.shape({
      languages: React.PropTypes.object
    })
  },

  getComputedProps (props) {
    return {
      selected: [ props.params.left, props.params.right ]
    }
  },

  getInitialState () {
    return {
      ...this.getComputedProps(this.props),
      dropdownVisible: false
    }
  },

  componentWillReceiveProps (props) {
    this.setState(this.getComputedProps(props))
  },

  render () {
    return (<div className='navbar'>
      <div className={c('dropdowns',
        this.state.dropdownVisible ? '-visible' : '-hidden'
      )}>
        <div className='container'>
          {map([0, 1], (i) => {
            return (<LangDropdownView
              idx={i}
              languages={this.props.data.languages}
              selected={this.state.selected[i] || this.state.selected[0]} />)
          })}
        </div>
      </div>

      <div className='container'>
        {map(this.state.selected, (lang, name, i) => {
          return (<div className={`lang -i${i + 1}`} key={i}>
            <button className={`lang-button -i${i + 1}`} onClick={this.toggleDropdown}>
              {this.props.data.languages[lang].title}
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

export default Nav
