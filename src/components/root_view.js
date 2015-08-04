import React from 'react'
import NavView from './nav_view'
import CodeView from './code_view'

let RootView = React.createClass({
  propTypes: {
    left: React.PropTypes.string,
    right: React.PropTypes.string
  },

  getDefaultProps () {
    return { data: window.Data }
  },

  render () {
    return (<div>
      <NavView {...this.props} />
      <CodeView {...this.props} />
    </div>)
  }
})

export default RootView
