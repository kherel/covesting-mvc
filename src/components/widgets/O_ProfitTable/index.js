import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
import A_TableRow from 'A_TableRow'
import A_Card from 'A_Card'
import A_H from 'A_H'
import M_TableEntry from 'M_TableEntry'
const cn = cssClassName('O_ProfitTable')

const O_ProfitTable = ({ mix }) => (
  <A_Card mix={cn([mix])}>
    <A_H type="section" mix={cn('title')}>
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

O_ProfitTable.propTypes = {
  mix: T.string,
  children: T.any,
}

export default O_ProfitTable
