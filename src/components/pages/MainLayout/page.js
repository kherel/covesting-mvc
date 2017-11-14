import React, { Component } from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('MainLayout')

class MainLayout extends Component {
  render() {
    const { children } = this.props
    return <div className={cn()}>{children}</div>
  }
}

MainLayout.propTypes = {
  children: T.any.isRequired,
}

MainLayout.defaultProps = {}

export default MainLayout
