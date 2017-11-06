import React, { Component } from 'react'
import './style.scss'
import T from 'prop-types'
import { curveCardinal } from 'd3-shape'
import { cssClassName } from 'utils'
import A_ChartLine from 'A_ChartLine'
import A_ChartArea from 'A_ChartArea'
import M_ChartGrid from 'M_ChartGrid'
const cn = cssClassName('M_Chart')
import range from 'lodash/range'

class M_Chart extends Component {
  static propTypes = {
    data: T.array,
    width: T.number,
    height: T.number,
    mx: T.string,
  }

  scaleX = x => {
    const { width, xMax } = this.props
    return x * width / xMax
  }

  scaleY = y => {
    const { height, yMax } = this.props
    return height - y * height / yMax
  }

  getChartPoints = data =>
    data.map(({ x, y }) => ({
      x: this.scaleX(x),
      y: this.scaleY(y),
    }))

  render() {
    const { width, height, data, mx, yMax } = this.props

    const xRange = data.map(({ x }) => this.scaleX(x))
    const yRange = range(0, yMax, 1000).map(y => this.scaleY(y))

    const gradientId = 'chart-gradient'

    return (
      <svg className={cn([mx])} height={height} width={width}>
        <defs>
          <linearGradient x1="0%" x2="0%" y1="0%" y2="100%" id={gradientId}>
            <stop className={cn('stop-top')} offset="0%" />
            <stop className={cn('stop-bottom')} offset="100%" />
          </linearGradient>
        </defs>

        <M_ChartGrid xRange={xRange} yRange={yRange} />
        <A_ChartArea
          data={this.getChartPoints(data)}
          height={height}
          curve={curveCardinal.tension(0.8)}
          gradientId={gradientId}
        />
        <A_ChartLine
          data={this.getChartPoints(data)}
          curve={curveCardinal.tension(0.8)}
          type="normal"
        />
      </svg>
    )
  }
}

export default M_Chart
