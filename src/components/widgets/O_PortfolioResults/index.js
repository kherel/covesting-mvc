import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
import A_Card from 'A_Card'
import A_H from 'A_H'
import A_P from 'A_P'
import O_BigChart from 'O_BigChart'

const chartData = [
  { x: '2017-01-14', y: 80 },
  { x: '2017-01-15', y: 60 },
  { x: '2017-01-16', y: 90 },
  { x: '2017-01-17', y: 30 },
  { x: '2017-01-18', y: 40 },
  { x: '2017-01-19', y: 48 },
  { x: '2017-01-20', y: 32 },
  { x: '2017-01-21', y: 90 },
]

const cn = cssClassName('O_PortfolioResults')

const O_PortfolioResults = ({ mix }) => (
  <A_Card mix={cn([mix])}>
    <A_H type="section" mix={cn('title')}>
      Portfolio results
    </A_H>
    <A_P type="subtitle" mix={cn('subtitle')}>
      Information displayed in points
    </A_P>

    <O_BigChart mix={cn('chart')} data={chartData} width={737} height={193} axisYMargin={27} axisXMargin={25} />

  </A_Card>
)

O_PortfolioResults.propTypes = {
  mix: T.string,
  children: T.any,
}

export default O_PortfolioResults
