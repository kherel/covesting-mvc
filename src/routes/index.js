import { Route, IndexRoute } from 'react-router'
import React from 'react'
import MainLayout from './MainLayout'
import Dashboard from './Dashboard'
import Login from './Login'

const getRoutes = (store) => {
  const state = store.getState()
  const {navigation:{role}} = state

  return (
    <Route path="/" >
      <IndexRoute component={Login} />
      <Route component={MainLayout} >
        <Route path="/dashboard" component={Dashboard} role={role}/>
      </Route>
    </Route>
  )
}

export default getRoutes
