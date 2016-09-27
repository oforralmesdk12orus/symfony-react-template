import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from '../components/App'
import Home from '../components/Home'
import TodoApp from '../components/TodoApp'
import AsyncApp from '../containers/AsyncApp'
import RealWorldApp from '../containers/RealWorldApp'
import RepoPage from '../containers/RepoPage'
import UserPage from '../containers/UserPage'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='todo' component={TodoApp} />
    <Route path='real-world' component={RealWorldApp}>
      <Route path=":login/:name" component={RepoPage} />
      <Route path=":login" component={UserPage} />
    </Route>
    <Route path='async' component={AsyncApp} />
  </Route>
)
