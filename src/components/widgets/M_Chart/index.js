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
import M_AxisY from 'M_AxisY'
import M_AxisX from 'M_AxisX'

class M_Chart extends Component {
  static propTypes = {
    data: T.array,
    width: T.number,
    height: T.number,
    mx: T.string,
    yMax: T.number,
    axisXMargin: T.number,
    axisYMargin: T.number,
    grid: T.bool,
    xAxis: T.bool,
    yAxis: T.bool,
    type: T.string,
  }

  static defaultProps = {
    grid: true,
    xAxis: true,
    yAxis: true,
    type: 'normal',
  }

  gradientId = 'chart-gradient'

  scaleX = x => x * this.props.width / (this.props.data.length - 1)
  scaleY = y => this.props.height - y * this.props.height / this.props.yMax

  getDataPoints = data =>
    data.map(({ y }, i) => ({
      x: this.scaleX(i),
      y: this.scaleY(y),
    }))

  getRangeX = data => data.map((x, i) => this.scaleX(i))
  getRangeY = (yMax, step) => range(0, yMax, step).map(y => this.scaleY(y))

  getAxisXData = data =>
    data.map(({ x }, i) => ({
      value: x,
      x: this.scaleX(i),
    }))

  getAxisYData = yMax =>
    range(0, yMax + 1000, 1000).map(value => ({
      y: this.scaleY(value),
      value,
    }))

  render() {
    const {
      width,
      height,
      data,
      mx,
      yMax,
      axisYMargin,
      axisXMargin,
      grid,
      xAxis,
      yAxis,
      type,
    } = this.props

    return (
      <svg className={cn([mx])} height={height} width={width}>
        <defs>
          <linearGradient x1="0%" x2="0%" y1="0%" y2="100%" id={this.gradientId}>
            <stop className={cn('stop-top')} offset="0%" />
            <stop className={cn('stop-bottom')} offset="100%" />
          </linearGradient>
        </defs>

        {xAxis && <M_AxisX data={this.getAxisXData(data)} margin={axisXMargin} height={height} />}
        {yAxis && <M_AxisY data={this.getAxisYData(yMax)} margin={axisYMargin} />}

        {grid && (
          <M_ChartGrid
            xRange={this.getRangeX(data)}
            yRange={this.getRangeY(yMax, 1000)}
            left={false}
          />
        )}

        <A_ChartArea
          data={this.getDataPoints(data)}
          height={height}
          curve={curveCardinal.tension(0.8)}
          gradientId={this.gradientId}
        />

        <A_ChartLine
          data={this.getDataPoints(data)}
          curve={curveCardinal.tension(0.8)}
          type={type}
        />
      </svg>
    )
  }
}

export default M_Chart
