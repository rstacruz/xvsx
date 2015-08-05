import React from 'react'
import { default as Router, Route, Redirect } from 'react-router'

import App from '../dispatcher'
import RootView from '../components/root_view'
import routeHandler from '../utils/route_handler'

const RootViewHandler = routeHandler(RootView, function (props) {
  App.emit('language:confirm', [ props.params.left, props.params.right ])
})

const AppRouter = Router.create({
  location: Router.HashLocation,
  routes: (
    <Route>
      <Redirect from='/' to='compare' params={{left: 'ruby', right: 'javascript'}} />
      <Route path=':left/:right' name='compare' handler={RootViewHandler} />
    </Route>
  )
})

AppRouter.run((Root, state) => {
  React.render(<Root />, document.getElementById('all'))
})

export default AppRouter
