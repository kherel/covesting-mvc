import React, { Component } from 'react'
import * as T from 'prop-types'
import MainLayoutContainer from 'MainLayout/container'
import { setRoute } from 'store/entities/navigation/actions'

class MainLayoutRoute extends Component {
  static prepareData({ dispatch, getState }, query, params, location) {
    dispatch(setRoute(location.pathname))
  }

  render() {
    return <MainLayoutContainer>{this.props.children}</MainLayoutContainer>
  }
}

MainLayoutRoute.propTypes = {
  children: T.any.isRequired,
}

export default MainLayoutRoute
