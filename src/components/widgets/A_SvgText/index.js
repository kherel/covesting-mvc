import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('A_SvgText')

const A_SvgText = ({ children, type, x, y, textAnchor, alignmentBaseline }) => (
  <text {...{ x, y, textAnchor, alignmentBaseline }} className={cn({ type })}>
    {children}
  </text>
)

A_SvgText.propTypes = {
  type: T.oneOf([
    'main', //*** 12/15 gray
  ]),
  x: T.number.isRequired,
  y: T.number.isRequired,
  textAnchor: T.string,
  alignmentBaseline: T.string,
  children: T.any,
}

A_SvgText.defaultProps = {
  type: 'main',
  textAnchor: 'middle',
  alignmentBaseline: 'middle',
}

export default A_SvgText
