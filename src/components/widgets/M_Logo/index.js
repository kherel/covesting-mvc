import React from 'react'
import * as T from 'prop-types'
import A_Svg from 'A_Svg'
import './style.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('M_Logo')
import { Link } from 'react-router'

const M_Logo = ({ mix, type }) => (
  <Link className={cn([mix])} to="/">
    <A_Svg type={type} mix={cn('svg-image')} />
  </Link>
)

M_Logo.propTypes = {
  mix: T.string, //BEM mixin from parent block, parent should control all positioning and sizing
  type: T.oneOf([
    'logo-white', // white logo
    'logo-blue', // blue logo
  ]).isRequired,
}

export default M_Logo
