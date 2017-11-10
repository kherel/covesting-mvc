import React, { Component } from 'react'
import './style.scss'
import T from 'prop-types'
import { cssClassName } from 'utils'
import M_ChartGrid from 'M_ChartGrid'
import M_AxisY from 'M_AxisY'
import M_AxisX from 'M_AxisX'
import { areaGradient } from 'constants/svgConstants'
import A_LinearGradient from 'A_LinearGradient'
import M_OutlinedPlot from 'src/components/widgets/M_OutlinedPlot'
import withScaledData from 'withScaledData'
import A_Circle from 'A_Circle'

const cn = cssClassName('M_Chart')

@withScaledData()
class M_Chart extends Component {
  static propTypes = {
    //From HOC
    scaledData: T.array,
    scaleX: T.func,
    scaleY: T.func,
    axisXData: T.array,
    axisYData: T.array,
    rangeX: T.array,
    rangeY: T.array,
    setRef: T.func,
    posX: T.number,
    posY: T.number,
    onMouseMove: T.func,

    //Own props
    width: T.number,
    height: T.number,
    mx: T.string,
    axisXMargin: T.number,
    axisYMargin: T.number,
  }

  render() {
    const {
      width,
      height,
      mx,
      axisYMargin,
      axisXMargin,
      scaledData,
      rangeX,
      rangeY,
      axisXData,
      axisYData,
      setRef,
      onMouseMove,
      posX,
      posY,
    } = this.props

    return (
      <svg ref={setRef} onMouseMove={onMouseMove} className={cn([mx])} {...{ height, width }}>
        <defs>
          <A_LinearGradient type={areaGradient} />
        </defs>
        <M_AxisX data={axisXData} margin={axisXMargin} height={height} />
        <M_AxisY data={axisYData} margin={axisYMargin} />
        <M_ChartGrid {...{ rangeX, rangeY }} left={false} />
        <M_OutlinedPlot data={scaledData} height={height} gradient={areaGradient} />

        <A_Circle cx={posX} cy={posY} r={5} />
      </svg>
    )
  }
}

export default M_Chart
