import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('A_Span')

const A_Span = ({ children, type, mx, active }) => <span className={cn({ type }, [mx, active && 'active'])}>{children}</span>

A_Span.propTypes = {
  type: T.oneOf([
    'table-big', //*** 15/18 black
    'menu-item', //*** 18px white
    'badge', //*** round badge, green background, white number 12px
  ]),
  active: T.bool,
  children: T.any,
  mx: T.string,
}

A_Span.defaultProps = {
  active: false,
}

export default A_Span
