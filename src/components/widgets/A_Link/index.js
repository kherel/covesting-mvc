import React from 'react'
import * as T from 'prop-types'
import { Link } from 'react-router'
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('A_Link')

const A_Link = ({ children, type, disabled, external, download, to, mix, ...props }) => {
  let _link
  const className = cn({ type, external }, [disabled && 'disabled', mix])

  if (external) {
    _link = (
      <a className={className} href={to} download={download} target="_blank" {...props}>
        {children}
      </a>
    )
  } else {
    _link = (
      <Link className={className} to={to} {...props}>
        {children}
      </Link>
    )
  }
  return _link
}
A_Link.propTypes = {
  type: T.oneOf([
    'card', //*** Need to set position: relative to mix because now mix doesn't overwrite element's style
  ]),
  external: T.bool, // for external links
  download: T.bool,
  disabled: T.bool,
  children: T.node.isRequired,
}

A_Link.defaultProps = {
  // type: 'primary'
}

export default A_Link
