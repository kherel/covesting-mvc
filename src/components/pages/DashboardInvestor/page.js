import React from 'react'
import './styles.scss'
import { cssClassName } from 'utils'
import O_ProfitTable from 'O_ProfitTable'
import O_LatestFeeds from 'O_LatestFeeds'
import O_Balances from 'O_Balances'
import O_PortfolioResults from 'O_PortfolioResults'
import O_AllSubscriptions from 'O_AllSubscriptions'
import M_Board from 'M_Board'
const cn = cssClassName('DashboardInvestor')

const DashboardInvestor = () => (
  <M_Board
    title = 'Dashboard'
  >
    <div className={cn()}>
      <O_PortfolioResults mix={cn('widget')} />
      <O_Balances mix={cn('dashboard')} />
      <O_AllSubscriptions mix={cn('widget')} />
      <div className={cn('inner-wrap')}>
        <O_ProfitTable mix={cn('widget')} />
        <O_LatestFeeds mix={cn('widget')} />
      </div>
    </div>
  </M_Board>
)

DashboardInvestor.propTypes = {}

export default DashboardInvestor
