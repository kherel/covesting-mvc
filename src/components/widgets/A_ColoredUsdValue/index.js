import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName, formatNumber } from 'utils'

const cn = cssClassName('A_ColoredUsdValue')

const A_ColoredUsdValue = ({ mix, value }) => (
  <span className={cn({ positive: value > 0 }, [mix])}>{`${formatNumber(value, 'usd')} USD`}</span>
)

A_ColoredUsdValue.propTypes = {
  mix: T.string,
  value: T.number,
  percent: T.bool,
}

A_ColoredUsdValue.defaultProps = {
  percent: false,
  type: 'normal',
}

export default A_ColoredUsdValue
