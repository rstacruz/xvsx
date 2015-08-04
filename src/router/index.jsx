import React from 'react'
import { default as Router, Route, Redirect } from 'react-router'
import RootView from '../components/root_view'
import App from '../dispatcher'

function routeHandler (View, fn) {
  return React.createClass({
    componentWillMount () { fn(this.props) },
    componentWillReceiveProps (props) { fn(props) },
    render () { return <View {...this.props} {...this.state} /> }
  })
}
const RootViewHandler = routeHandler(RootView, function (props) {
  App.emit('language:confirm', [ props.params.left, props.params.right ])
})

const AppRouter = Router.create({
  location: Router.HashLocation,
  routes: (
    <Route>
      <Redirect from='/' to='compare' params={{left: 'ruby', right: 'python'}} />
      <Route path=':left/:right' name='compare' handler={RootViewHandler} />
    </Route>
  )
})

AppRouter.run((Root, state) => {
  React.render(<Root />, document.getElementById('all'))
})

export default AppRouter
