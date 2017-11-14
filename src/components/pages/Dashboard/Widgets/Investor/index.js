import React from 'react'
import * as T from 'prop-types'
import './styles.scss'
import A_Card from 'A_Card'
import { cssClassName } from 'utils'
import O_ProfitTable from 'O_ProfitTable'
import O_LatestFeeds from 'O_LatestFeeds'
const cn = cssClassName('InvestorWidgets')

const InvestorWidgets = () => (
  <div className={cn()}>
    <A_Card mix={cn('widget')} />
    <A_Card mix={cn('widget')} />
    <A_Card mix={cn('widget')} />
    <div className={cn('inner-wrap')}>
      <O_ProfitTable mix={cn('widget')} />
      <O_LatestFeeds mix={cn('widget')} />
    </div>
  </div>
)

InvestorWidgets.propTypes = {}

export default InvestorWidgets
