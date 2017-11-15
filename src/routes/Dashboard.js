import React, { Component } from 'react'
import DashboardInvestor from 'DashboardInvestor/container'
import DashboardTrader from 'DashboardTrader/container'
import history from 'history'

class DashboardRoute extends Component {
  render() {
    const { route: { role } } = this.props

    switch (role) {
      case 'trader':
        return <DashboardTrader />
      case 'investor':
        return <DashboardInvestor />
    }

    history.push('/')
  }
}

export default DashboardRoute
