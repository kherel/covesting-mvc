import React from 'react'
import T from 'prop-types'
import { cssClassName } from 'src/utils/index'
import './style.scss'

const cn = cssClassName('A_LinearGradient')

const A_LinearGradient = ({ x1, x2, y1, y2, type }) => (
  <linearGradient x1={x1} x2={x2} y1={y1} y2={y2} id={type}>
    <stop className={cn(type, ['from'])} offset="0" />
    <stop className={cn(type, ['to'])} offset="1" />
  </linearGradient>
)

A_LinearGradient.propTypes = {
  x1: T.string,
  x2: T.string,
  y1: T.string,
  y2: T.string,
  type: T.string,
}

A_LinearGradient.defaultProps = {
  x1: '0%',
  x2: '100%',
  y1: '0%',
  y2: '0%',
}

export default A_LinearGradient
