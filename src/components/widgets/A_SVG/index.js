import React from 'react'
import T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('A_SVG')

const A_SVG = ({ type, active, ...props }) => (
  <svg className={cn({ type, active })} {...props}>
    <use xlinkHref={`#icon-${type}`} />
  </svg>
)

A_SVG.propTypes = {
  type: T.oneOf([
    'star', //***
  ]),
  active: T.bool,
}

export default A_SVG
