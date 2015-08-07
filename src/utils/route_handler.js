import React from 'react'

function routeHandler (fn, View) {
  return React.createClass({
    componentWillMount () { fn(this.props) },
    componentWillReceiveProps (props) { fn(props) },
    render () {
      if (View) {
        return <View {...this.props} {...this.state} />
      } else {
        return null
      }
    }
  })
}

export default routeHandler
