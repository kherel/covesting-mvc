import React, { Component } from 'react'
import './style.scss'
import T from 'prop-types'
import { cssClassName } from 'utils'
import M_ChartGrid from 'M_ChartGrid'
import M_AxisY from 'M_AxisY'
import M_AxisX from 'M_AxisX'
import { AREA_GRADIENT, POPUP_SHADOW } from 'src/constants/svgConstants'
import A_LinearGradient from 'A_LinearGradient'
import M_OutlinedPlot from 'M_OutlinedPlot'
import withScaledData from 'src/HOC/withScaledData'
import A_Circle from 'A_Circle'
import M_ChartPopup from 'M_ChartPopup'

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
    popupData: T.shape({ date: T.string, increment: T.number }),
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
      popupData,
    } = this.props

    const isPopupShown = posX >= 0

    return (
      <svg ref={setRef} className={cn([mix])} {...{ height, width, onMouseMove, onMouseLeave }}>
        <defs>
          <A_LinearGradient x1="0%" x2="0%" y1="0%" y2="100%" type={AREA_GRADIENT} />
          <filter id={POPUP_SHADOW} x="-100%" y="-100%" width="400%" height="400%">
            <feOffset result="offOut" dx={0} dy={5} />
            <feColorMatrix
              in="offOut"
              result="matrixOut"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            />
            <feGaussianBlur in="matrixOut" result="blurOffset" stdDeviation={10} />
            <feBlend in="SourceGraphic" in2="blurOffset" mode="normal" />
          </filter>
        </defs>
        <M_AxisX data={axisXData} margin={axisXMargin} height={height} />
        <M_AxisY data={axisYData} margin={axisYMargin} />
        <M_ChartGrid {...{ rangeX, rangeY }} left={false} />
        <M_OutlinedPlot data={scaledData} height={height} gradient={AREA_GRADIENT} />

        {isPopupShown && <A_Circle cx={posX} cy={posY} r={5} />}
        {isPopupShown && (
          <M_ChartPopup
            {...{ posX, posY }}
            data={popupData}
            shadowId={POPUP_SHADOW}
            alignment={posX > width - 100 ? 'left' : 'right'} //If data point is too close to right border, draw popup on the left side
          />
        )}
      </svg>
    )
  }
}

export default O_BigChart
