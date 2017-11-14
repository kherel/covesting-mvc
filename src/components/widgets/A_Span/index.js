import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('A_Span')

const A_Span = ({ children, type, mix, active }) => <span className={cn({ type }, [mix, active && 'active'])}>{children}</span>

A_Span.propTypes = {
  type: T.oneOf([
    'table-big', //*** 15/18 black
    'bold', //*** semi-bold
    'menu-item', //*** 18px white
    'badge', //*** round badge, green background, white number 12px
    'feed-name', //*** 14/17 0.5 letter-spacing, black
    'feed-message', //*** 12/15 0.4 letter-spacing, blue,
    'feed-time', //*** 12/15 0.4, gray
  ]),
  active: T.bool,
  children: T.any,
  mix: T.string,
}

A_Span.defaultProps = {
  active: false,
}

export default A_Span
