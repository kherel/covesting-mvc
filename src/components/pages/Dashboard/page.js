import React, { Component } from 'react'
// import * as T from "prop-types";
import Widgets from './Widgets'
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('Dashboard')

class Dashboard extends Component {
  render() {
    return (
      <main className={cn()}>
        <div className={cn('left')} />
        <div className={cn('right')}>
          <div className={cn('header')} />
          <Widgets
            mix={cn('widgets')}
            type='investor'
          />
          <div className={cn('widgets-container')} />
        </div>
      </main>
    )
  }
}

Dashboard.propTypes = {}

Dashboard.defaultProps = {}

export default Dashboard
