import React from 'react'
import c from 'classnames'
import map from 'dom101/map'
import { connectToStores } from 'uflux'
import Language from '../stores/language'

import LangDropdown from './lang-dropdown'

let Nav = React.createClass({
  statics: {
    getStores: () => [ Language ],
    getPropsFromStores (stores) { 
      return {
        selected: Language.getState(),
        languages: Data.languages
      }
    }
  },

  getInitialState () {
    return {
      dropdownVisible: false,
      compact: false
    }
  },

  toggleDropdown () {
    this.setState({ dropdownVisible: ! this.state.dropdownVisible })
  },

  toggleCompact () {
    this.setState({ compact: ! this.state.compact })
  },

  render () {
    return <div className='navbar'>
      <div className={c('dropdowns', {
          '-visible': this.state.dropdownVisible,
          '-hidden': !this.state.dropdownVisible
      })}>
        <div className='container'>
          {map([0, 1], (i) => {
            return <LangDropdown
              idx={i}
              languages={this.props.languages}
              selected={this.props.selected[i] || this.props.selected[0]} />
          })}
        </div>
      </div>

      <div className='container'>
        {map(this.props.selected, (lang, name, i) => {
          return <div className={`lang -i${i + 1}`} key={i}>
            <button className={`lang-button -i${i + 1}`} onClick={this.toggleDropdown}>
              {this.props.languages[lang].title}
            </button>
          </div>
        })}
      </div>

      <div className='right'>
        <button>Compact</button>
      </div>
    </div>
  }
})

Nav = connectToStores(Nav)

export default Nav
