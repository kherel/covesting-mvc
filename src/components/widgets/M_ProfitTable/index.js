import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
import A_TableRow from 'A_TableRow'
import A_Card from 'A_Card'
import A_H from 'A_H'
import M_TableEntry from 'M_TableEntry'
const cn = cssClassName('M_ProfitTable')

const M_ProfitTable = ({ mx }) => (
  <A_Card mx={cn([mx])}>
    <A_H type="section" mx={cn('title')}>
      Total profit:
    </A_H>

    <A_TableRow type="border-clear">
      <M_TableEntry name="Day" value={9} />
      <M_TableEntry name="7 days" value={-5} />
      <M_TableEntry name="Month" value={15} />
    </A_TableRow>

    <A_TableRow type="border-clear">
      <M_TableEntry name="3 mo" value={9} />
      <M_TableEntry name="Year" value={15} />
      <M_TableEntry name="All" value={55} />
    </A_TableRow>
  </A_Card>
)

M_ProfitTable.propTypes = {
  mx: T.string,
  children: T.any,
}

export default M_ProfitTable
