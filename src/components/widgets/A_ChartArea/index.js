import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('A_ChartArea')
import { area } from 'd3-shape'

const A_ChartArea = ({ data, height, curve, type, gradient }) => {
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
      style={gradient && { fill: `url(#${gradient})` }}
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
  height: T.number, //distance from top of SVG file to the bottom line of element
  curve: T.func,
  type: T.oneOf([
    'normal',
    'small',
    'bar',
  ]),
  gradient: T.string,
}

export default A_ChartArea
