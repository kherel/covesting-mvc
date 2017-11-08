import React from 'react'
import T from 'prop-types'
import { cssClassName, formatNumber } from 'utils'
import './style.scss'
import A_SvgText from '../A_SvgText/index'

const cn = cssClassName('M_AxisY')

const M_AxisY = ({ data, format, margin }) => {
  return (
    <g className={cn()}>
      {data.map(({ y, value }) => (
        <A_SvgText key={y} x={-margin} y={y}>
          {formatNumber(value, format)}
        </A_SvgText>
      ))}
    </g>
  )
}

M_AxisY.propTypes = {
  data: T.arrayOf(
    T.shape({
      y: T.number,
      value: T.number,
    })
  ).isRequired,
  format: T.string,
  margin: T.number.isRequired, // From left side of text block to left side of svg
}

M_AxisY.defaultProps = {
  format: 'kilo',
}

export default M_AxisY
