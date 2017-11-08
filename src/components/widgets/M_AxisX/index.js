import React from 'react'
import T from 'prop-types'
import { cssClassName } from 'utils'
import './style.scss'
import { formatDate } from 'utils/dateHelpers'
import A_SvgText from 'A_SvgText'

const cn = cssClassName('M_AxisX')

const M_AxisX = ({ data, format, margin, height, firstTick, lastTick }) => {
  //Filter first and last ticks
  const slicedData = data.slice(firstTick ? 0 : 1, lastTick ? data.length : data.length - 1)

  return (
    <g className={cn()}>
      {slicedData.map(({ x, value }) => (
        <A_SvgText key={x} x={x} y={height + margin}>
          {formatDate(value, format)}
        </A_SvgText>
      ))}
    </g>
  )
}

M_AxisX.propTypes = {
  data: T.arrayOf(
    T.shape({
      x: T.number,
      value: T.string,
    })
  ).isRequired,
  type: T.oneOf([]),
  height: T.number,
  format: T.string,
  margin: T.number, // From bottom side of text block to bottom side of svg
  firstTick: T.bool,
  lastTick: T.bool,
}

M_AxisX.defaultProps = {
  format: 'DD MMM',
  firstTick: false,
  lastTick: false,
}

export default M_AxisX
