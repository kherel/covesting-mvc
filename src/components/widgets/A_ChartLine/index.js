import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('A_ChartLine')
import { line } from 'd3-shape'

const A_ChartLine = ({ data, curve, type }) => {
  let newLine = line()
    .x(({ x }) => x)
    .y(({ y }) => y)

  if (curve) {
    newLine = newLine.curve(curve)
  }

  return <path d={newLine(data)} className={cn({ type })} />
}

A_ChartLine.propTypes = {
  data: T.array.isRequired,
  curve: T.func,
  type: T.oneOf([
    'normal', //2px solid blue
    'small', //1px solid blue
    'grid', //0.5px solid gray
  ]),
}

A_ChartLine.defaultProps = {
  curve: null,
}

export default A_ChartLine
