import React from 'react'
import { default as Router, Route, Redirect } from 'react-router'
import RootView from '../components/root_view'
import App from '../dispatcher'

const RootViewHandler = React.createClass({
  render () {
    App.emit('language:confirm', [ this.props.params.left, this.props.params.right ])
    return <RootView {...this.props} />
  }
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
