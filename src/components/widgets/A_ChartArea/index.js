import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('A_ChartArea')
import { area } from 'd3-shape'

const A_ChartArea = ({ data, height, curve, type, gradientId }) => {
  let newArea = area()
    .x(({ x }) => x)
    .y0(height)
    .y1(({ y }) => y)

  if (curve) {
    newArea = newArea.curve(curve)
  }

  return (
    <path
      d={newArea(data)}
      className={cn({ type })}
      style={gradientId && { fill: `url(#${gradientId})` }}
    />
  )
}

A_ChartArea.propTypes = {
  data: T.arrayOf(
    T.shape({
      x: T.number,
      y: T.number,
    })
  ),
  height: T.number,
  curve: T.func,
  type: T.oneOf([
    'normal', //*** 2px stroke-width
    'small', //*** 1px stroke-width
  ]),
  gradientId: T.string,
}

A_ChartArea.defaultProps = {
  curve: () => {},
}

export default A_ChartArea
