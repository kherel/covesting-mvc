import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('A_Circle')

const A_Circle = ({ cx, cy, r, type, mx, ...props }) => (
  <circle {...{ cx, cy, r }} className={cn({ type }, [mx])} {...props} />
)

A_Circle.propTypes = {
  type: T.oneOf(['chart-hover']),
  mx: T.string,
  cx: T.number.isRequired,
  cy: T.number.isRequired,
  r: T.number.isRequired,
}

A_Circle.defaultProps = {
  type: 'chart-hover',
}
export default A_Circle
