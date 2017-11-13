import React, { Component } from 'react'
import InvestorWidgets from './Investor'
import * as T from "prop-types";
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('Widgets')

class Widgets extends Component {
  static propTypes = {
    mix: T.string,
    type: T.string,
  }

  _createWidgets = (type) => {
    switch(type) {
      case 'investor':
        return <InvestorWidgets mix={cn('content')} />
      case 'trader':
        break
    }
  }

  render() {
    const {mix, type} = this.props
    const widgets = this._createWidgets(type)
    return (
      <div className={cn([mix])}>
        {widgets}
      </div>
    )
  }
}

Widgets.propTypes = {}

Widgets.defaultProps = {}

export default Widgets
