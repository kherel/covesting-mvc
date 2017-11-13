import React from 'react'
import T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
import A_MenuIcon from 'A_MenuIcon'
const cn = cssClassName('M_NavItem')
import { Link } from 'react-router'
import A_Span from 'A_Span'

const M_NavItem = ({ type, active, mx, to, title, ...props }) => (
  <Link to={to} className={cn({ active }, [mx])} {...props}>
    <A_MenuIcon mx={cn('icon')} type={type} active={active} />
    <A_Span type="menu-item" active={active}>
      {title}
    </A_Span>
  </Link>
)

M_NavItem.propTypes = {
  type: T.string.isRequired,
  active: T.bool,
  mx: T.string,
  to: T.string.isRequired,
  title: T.string.isRequired,
}

M_NavItem.defaultProps = {
  active: false,
}

export default M_NavItem
