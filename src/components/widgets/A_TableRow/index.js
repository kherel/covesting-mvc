import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('A_TableRow')

const A_TableRow = ({ type, children, mix }) => <div className={cn({ type }, [mix])}>{children}</div>

A_TableRow.propTypes = {
  type: T.oneOf([
    'border-clear', //*** top and bottom borders for each row
    'border-bg', //*** top and bottom borders for each row
    'feed', //*** rgba(6, 81, 120, 0.5);
  ]),
  mix: T.string,
  children: T.any,
}

export default A_TableRow
