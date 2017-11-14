import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
import A_Th from 'A_Th'
const cn = cssClassName('A_ThSortable')

const A_ThSortable = ({ children, type, descending, mix, ...props }) => (
  <div className={cn([mix])}>
    <A_Th mix={cn('text', { descending })} type={type} {...props}>
      {children}
    </A_Th>
  </div>
)

A_ThSortable.propTypes = {
  type: T.oneOf([
    'small', //*** 12/15 table-heading-1
    'normal', //*** 16/20 table-heading-2
    'dark', //*** 16/20 table-heading-3
  ]),
  mix: T.string,
  descending: T.bool,
  children: T.any,
}

A_ThSortable.defaultProps = {
  descending: true,
}

export default A_ThSortable
