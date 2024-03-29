import { Route, IndexRoute } from 'react-router'
import React from 'react'
import MainLayout from './MainLayout'
import Dashboard from './Dashboard'
import Login from './Login'

const getRoutes = () => {
  return (
    <Route path="/" component={MainLayout} prepareData={MainLayout.prepareData}>
      <IndexRoute component={Dashboard} />
      <Route path="/login" component={Login} />
    </Route>
  )
}

export default getRoutes
