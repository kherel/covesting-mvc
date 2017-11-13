import { Route, IndexRoute } from 'react-router'
import React from 'react'
import MainLayout from './MainLayout'
import Home from './Home'
import Dashboard from './Dashboard'

const getRoutes = () => {
  return (
    <Route path="/" component={MainLayout} prepareData={MainLayout.prepareData}>
      <IndexRoute component={Dashboard} />
    </Route>
  )
}

export default getRoutes
