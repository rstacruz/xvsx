import React from 'react'

function routeHandler (View, fn) {
  return React.createClass({
    componentWillMount () { fn(this.props) },
    componentWillReceiveProps (props) { fn(props) },
    render () { return <View {...this.props} {...this.state} /> }
  })
}

export default routeHandler
