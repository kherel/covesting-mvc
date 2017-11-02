import React, { Component } from 'react'
// import * as T from "prop-types";
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('MainLayout')

class MainLayout extends Component {
  render() {
    const { children } = this.props
    return <div className={cn()}>{children}</div>
  }
}

MainLayout.propTypes = {}

MainLayout.defaultProps = {}

export default MainLayout
