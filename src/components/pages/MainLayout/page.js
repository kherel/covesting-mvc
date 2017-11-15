import React, { Component } from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('MainLayout')
import M_Logo from 'M_Logo'

class MainLayout extends Component {
  render() {
    const { children } = this.props
    return (
      <div className={cn()}>
        <main className={cn('inner')}>
          <nav className={cn('nav')}>
            <M_Logo mix={cn('logo')} type="logo-white" />
            <footer className={cn('footer')}>
              Covesting © 2017<br />
              All rights reserved
            </footer>
          </nav>
          {children}
        </main>
      </div>)
  }
}

MainLayout.propTypes = {
  children: T.any.isRequired,
}

MainLayout.defaultProps = {}

export default MainLayout
