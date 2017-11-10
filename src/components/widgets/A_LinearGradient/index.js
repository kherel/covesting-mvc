import React from 'react'
import T from 'prop-types'
import { cssClassName } from 'src/utils/index'
import './style.scss'

const cn = cssClassName('A_LinearGradient')

const A_LinearGradient = ({ x1, x2, y1, y2, type }) => (
  <linearGradient x1={x1} x2={x2} y1={y1} y2={y2} id={type}>
    <stop className={cn('first', { type })} offset="0" />
    <stop className={cn('second', { type })} offset="1" />
  </linearGradient>
)

A_LinearGradient.propTypes = {
  x1: T.string,
  x2: T.string,
  y1: T.string,
  y2: T.string,
  type: T.oneOf(['area-gradient']),
}

A_LinearGradient.defaultProps = {
  x1: '0%',
  x2: '0%',
  y1: '0%',
  y2: '100%',
}

export default A_LinearGradient
