import React from 'react'
import T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('A_Svg')

const A_Svg = ({ type, active, ...props }) => (
  <svg className={cn({ type, active })} {...props}>
    <use xlinkHref={`#icon-${type}`} />
  </svg>
)

A_Svg.propTypes = {
  type: T.oneOf([
    'star', //***
  ]),
  active: T.bool,
}

export default A_Svg
