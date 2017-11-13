import React from 'react'
import * as T from "prop-types";
import './styles.scss'
import A_Card from 'A_Card'
import { cssClassName } from 'utils'
const cn = cssClassName('InvestorWidgets')


const InvestorWidgets = ({mix}) => (
  <div className={cn([mix])}>
    <A_Card mx={cn('widget')}/>
    <A_Card mx={cn('widget')}/>
    <A_Card mx={cn('widget')}/>
    <div className={cn('inner-wrap')}>
      <A_Card mx={cn('widget')}/>
      <A_Card mx={cn('widget')}/>
    </div>
  </div>
)

InvestorWidgets.propTypes = {
  mix: T.string
}

export default InvestorWidgets
