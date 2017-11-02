import { Route, IndexRoute } from 'react-router'
import React from 'react'
import MainLayout from './MainLayout'
import Home from './Home'

const getRoutes = () => {
  return (
    <Route path="/" component={MainLayout} prepareData={MainLayout.prepareData}>
      <IndexRoute component={Home} />
    </Route>
  )
}

export default getRoutes
