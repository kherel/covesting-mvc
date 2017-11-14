import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'

const cn = cssClassName('A_P')

const A_P = ({ children, type, mix }) => <p className={cn({ type }, [mix])}>{children}</p>

A_P.propTypes = {
  type: T.oneOf([
    'description', //*** 12/19 user description
    'subtitle', //*** 12/18 section-subtitle
    'user-block', //*** 16/20 dark-gray
  ]),
  children: T.any,
  mix: T.string,
}

export default A_P
