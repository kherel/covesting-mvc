import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
import A_Span from 'A_Span'
import A_ColoredValue from 'A_ColoredValue'
const cn = cssClassName('M_TableEntry')

const M_TableEntry = ({ mix, type, name, value, colored }) => (
  <A_Span mix={cn({ type }, [mix])} type="table-big">
    <span className={cn('name')}>{name}:</span>
    {colored ? <A_ColoredValue value={value} percent /> : <A_Span type="bold">{value}</A_Span>}
  </A_Span>
)

M_TableEntry.propTypes = {
  mix: T.string,
  children: T.any,
  type: T.oneOf(['inline']),
  name: T.string.isRequired,
  value: T.number.isRequired,
  colored: T.bool,
}

M_TableEntry.defaultProps = {
  colored: false,
}

export default M_TableEntry
