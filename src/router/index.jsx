import React from 'react'
import { default as Router, Route, Redirect } from 'react-router'

import App from '../dispatcher'
import routeHandler from '../utils/route_handler'

const RootViewHandler = routeHandler(function (props) {
  App.emit('language:confirm', [ props.params.left, props.params.right ])
})

let Location = (~location.hostname.indexOf('ricostacruz.com')) ?
  Router.HashLocation :
  Router.HistoryLocation

const AppRouter = Router.create({
  location: Location,
  routes: (
    <Route>
      <Redirect from='/' to='compare' params={{left: 'ruby', right: 'javascript'}} />
      <Route path=':left/:right' name='compare' handler={RootViewHandler} />
    </Route>
  )
})

let div = document.createElement('div')
document.body.appendChild(div)
AppRouter.run((Root, state) => { React.render(<Root />, div)})

export default AppRouter
