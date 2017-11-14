import React, { Component } from 'react'
import M_Logo from 'M_Logo'
import Widgets from './Widgets'
import './styles.scss'
import { cssClassName } from 'utils'
import M_Header from 'M_Header'
const cn = cssClassName('Dashboard')

class Dashboard extends Component {
  render() {
    return (
      <main className={cn()}>
        <div className={cn('left')}>
          <M_Logo mix={cn('logo')} type="logo-white" />
          <footer className={cn('footer')}>
            Covesting © 2017<br />
            All rights reserved
          </footer>
        </div>

        <div className={cn('right')}>
          <M_Header mix={cn('header')} />
          <Widgets mix={cn('widgets')} type="investor" />
          <div className={cn('widgets-container')} />
        </div>
      </main>
    )
  }
}

Dashboard.propTypes = {}

Dashboard.defaultProps = {}

export default Dashboard
