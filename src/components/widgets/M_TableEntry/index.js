import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
import A_Span from 'A_Span'
import A_ColoredValue from 'A_ColoredValue'
const cn = cssClassName('M_TableEntry')

const M_TableEntry = ({ mx, type, name, value }) => (
  <A_Span mx={cn({ type }, [mx])} type="table-big">
    <span>{name}:</span>
    <A_ColoredValue mx={cn('value')} value={value} percent />
  </A_Span>
)

M_TableEntry.propTypes = {
  mx: T.string,
  children: T.any,
  type: T.oneOf(['inline']),
  name: T.string.isRequired,
  value: T.number.isRequired,
}

export default M_TableEntry
