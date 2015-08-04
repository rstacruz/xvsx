import React from 'react'
import NavView from './nav_view'
import CodeView from './code_view'

let ChromeView = React.createClass({
  render () {
    return (<div>
      <NavView />
      <CodeView />
    </div>)
  }
})

export default ChromeView
