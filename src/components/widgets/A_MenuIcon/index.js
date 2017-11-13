import React from 'react'
import T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('A_MenuIcon')

const A_MenuIcon = ({ type, active, mx, ...props }) => (
  <svg className={cn({type}, [mx, active && 'active'])} {...props}>
    <use xlinkHref={`#icon-${type}`} />
  </svg>
)

A_MenuIcon.propTypes = {
  type: T.string.isRequired,
  active: T.bool,
  mx: T.string,
}

export default A_MenuIcon
