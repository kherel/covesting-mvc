import React, { Component } from 'react'
// import * as T from "prop-types";
import M_Logo from 'M_Logo'
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('Login')

class Login extends Component {
  render() {
    return (
      <main className={cn()}>

        <div className={cn('left')}>
          <M_Logo mix={cn('logo')} type='logo-blue' />
        </div>

        <div className={cn('right')}>
          <header className={cn('header')}>
          </header>
        </div>
      </main>
    )
  }
}

Login.propTypes = {}

Login.defaultProps = {}

export default Login
