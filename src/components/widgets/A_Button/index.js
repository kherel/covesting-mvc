import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { Link } from 'react-router'
import { cssClassName } from 'utils'
const cn = cssClassName('A_Btn')

const A_Btn = ({
  type,
  children,
  disabled,
  btnType,
  to,
  onClick,
  mx,
  external,
  download,
  ...props
}) => {
  disabled = disabled && 'disabled'

  switch (type) {
    case 'link-primary':
    case 'link-secondary':
      if (external) {
        return (
          <a
            href={to}
            className={cn('link', { type }, [mx, 'link-external'])}
            download={download}
            target="_blank"
          >
            {children}
          </a>
        )
      } else {
        return (
          <Link className={cn('link', { type }, [mx])} disabled={disabled} to={to} {...props}>
            {children}
          </Link>
        )
      }

    case 'button-primary':
    case 'button-secondary':
    case 'button-interface':
    default:
      return (
        <button
          className={cn('button', { type }, [disabled, mx])}
          type={btnType}
          {...{ onClick, ...props }}
        >
          {children}
        </button>
      )
  }
}

A_Btn.propTypes = {
  type: T.oneOf([
    'link-primary', // solid link
    'link-secondary', // transparent link
    'button-primary', //solid btn
    'button-secondary', //transparent btn
    'button-menu', //menu transparent button
  ]).isRequired,
  btnType: T.oneOf([
    // button tag attribute
    'button',
    'submit',
    'reset',
  ]),
  to: T.string,
  disabled: T.bool,
}

A_Btn.defaultProps = {
  to: '#',
  btnType: 'button',
}

export default A_Btn
