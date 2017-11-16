import { Route, IndexRoute } from 'react-router'
import React from 'react'
import MainLayout from './MainLayout'
import Dashboard from './Dashboard'
import Login from './Login'

import Example from './examples/example'
import Confirm from './examples/confirm'
import Reset from './examples/reset'

const getRoutes = () => {
  return (
    <Route path="/" component={MainLayout} prepareData={MainLayout.prepareData}>
      <IndexRoute component={Dashboard} />
      <Route path="/login" component={Login} />

      <Route path="/example" component={Example} />
      <Route path="/confirm" component={Confirm} />
      <Route path="/reset" component={Reset} />
    </Route>
  )
}

export default getRoutes
