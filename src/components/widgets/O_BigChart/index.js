import React, { Component } from 'react'
import './style.scss'
import T from 'prop-types'
import { cssClassName } from 'utils'
import M_ChartGrid from 'M_ChartGrid'
import M_AxisY from 'M_AxisY'
import M_AxisX from 'M_AxisX'
import { AREA_GRADIENT } from 'src/constants/svgConstants'
import A_LinearGradient from 'A_LinearGradient'
import M_OutlinedPlot from 'src/components/widgets/M_OutlinedPlot'
import withScaledData from 'src/HOC/withScaledData'
import A_Circle from 'A_Circle'

const cn = cssClassName('O_BigChart')

@withScaledData()
class O_BigChart extends Component {
  static propTypes = {
    //From HOC
    scaledData: T.array,
    axisXData: T.array,
    axisYData: T.array,
    rangeX: T.array,
    rangeY: T.array,
    setRef: T.func,
    posX: T.number,
    posY: T.number,
    onMouseMove: T.func,
    onMouseLeave: T.func,

    //Own props
    width: T.number,
    height: T.number,
    mix: T.string,
    axisXMargin: T.number,
    axisYMargin: T.number,
  }

  render() {
    const {
      width,
      height,
      mix,
      axisYMargin,
      axisXMargin,
      scaledData,
      rangeX,
      rangeY,
      axisXData,
      axisYData,
      setRef,
      onMouseMove,
      onMouseLeave,
      posX,
      posY,
    } = this.props

    return (
      <svg
        ref={setRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={cn([mix])}
        {...{ height, width }}
      >
        <defs>
          <A_LinearGradient x1="0%" x2="0%" y1="0%" y2="100%" type={AREA_GRADIENT} />
        </defs>
        <M_AxisX data={axisXData} margin={axisXMargin} height={height} />
        <M_AxisY data={axisYData} margin={axisYMargin} />
        <M_ChartGrid {...{ rangeX, rangeY }} left={false} />
        <M_OutlinedPlot data={scaledData} height={height} gradient={AREA_GRADIENT} />

        <A_Circle cx={posX} cy={posY} r={5} />
      </svg>
    )
  }
}

export default O_BigChart
