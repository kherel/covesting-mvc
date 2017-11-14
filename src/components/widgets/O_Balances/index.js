import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
import A_TableRow from 'A_TableRow'
import A_Card from 'A_Card'
import A_H from 'A_H'
import M_TableEntry from 'M_TableEntry'
import A_P from 'A_P'
import A_Th from 'A_Th'
import A_Link from 'A_Link'
const cn = cssClassName('O_Balances')

const O_Balances = ({ mix }) => (
  <A_Card mix={cn([mix])}>
    <A_H type="section" mix={cn('title')}>
      Balances
    </A_H>
    <A_P type="subtitle" mix={cn('subtitle')}>
      Your personal balance
    </A_P>

    <div className={cn('table-top')}>
      <A_Th mix={cn('table-header')}>Allocated - 150 COV</A_Th>
      <A_TableRow type="border-bg" mix={cn('table-row')}>
        <M_TableEntry name="ETH" value={5} />
        <M_TableEntry name="BTC" value={0.1} />
        <M_TableEntry name="USD" value={1500} />
      </A_TableRow>
    </div>

    <div className={cn('table-bottom')}>
      <A_Th mix={cn('table-header')}>Allocated - 150 COV</A_Th>
      <A_TableRow type="border-bg" mix={cn('table-row')}>
        <M_TableEntry name="ETH" value={10} />
        <M_TableEntry name="BTC" value={0.2} />
        <M_TableEntry name="USD" value={3000} />
      </A_TableRow>
    </div>

    <A_Link mix={cn('link')} type="card">Go to wallet</A_Link>
  </A_Card>
)

O_Balances.propTypes = {
  mix: T.string,
  children: T.any,
}

export default O_Balances
