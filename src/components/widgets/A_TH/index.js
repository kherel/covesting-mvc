import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('A_TH')

const A_TH = ({ children, type, mx }) => <th className={cn({ type }, [mx])}>{children}</th>

A_TH.propTypes = {
  type: T.oneOf([
    'small', //*** 12/15 table-heading-1
    'normal', //*** 16/20 table-heading-2
    'dark', //*** 16/20 table-heading-3
  ]),
}

export default A_TH
