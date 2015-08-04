import React from 'react'
import NavView from './nav_view'
import CodeView from './code_view'
import TocView from './toc_view'

let RootView = React.createClass({
  propTypes: {
    left: React.PropTypes.string,
    right: React.PropTypes.string
  },

  getDefaultProps () {
    return { data: window.Data }
  },

  render () {
    return (
      <div className='lmao'>
        <NavView {...this.props} />
        <div className='code-layout'>
          <CodeView {...this.props} />
          <TocView {...this.props} />
        </div>
      </div>
    )
  }
})

export default RootView
