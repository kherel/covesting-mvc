import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('A_ColoredValue')

const A_ColoredValue = ({ type, mix, percent, value }) => {
  const positive = value  > 0
  const prefix = positive ? '+' : ''
  const suffix = percent ? '%' : ''

  return <span className={cn({ type, positive }, [mix])}>{`${prefix}${value}${suffix}`}</span>
}

A_ColoredValue.propTypes = {
  type: T.oneOf([
    'normal', //*** 15/18
  ]),
  mix: T.string,
  value: T.number,
  percent: T.bool,
}

A_ColoredValue.defaultProps = {
  percent: false,
  type: 'normal',
}

export default A_ColoredValue
