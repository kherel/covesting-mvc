import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('A_TableRow')

const A_TableRow = ({ type, children, mx }) => <div className={cn({ type }, [mx])}>{children}</div>

A_TableRow.propTypes = {
  type: T.oneOf([
    'border-clear', //*** top and bottom borders for each row
  ]),
  mx: T.string,
  children: T.any,
}

export default A_TableRow
