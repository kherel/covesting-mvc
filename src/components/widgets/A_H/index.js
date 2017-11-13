import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('A_H')

const A_H = ({ type, children, center, mix }) => {
  let tagType
  switch (type) {
    case 'page':
      tagType = 'h1'
      break
    case 'section':
    case 'user':
      tagType = 'h3'
      break
    default:
      tagType = 'h3'
  }

  center = center && 'center'

  return React.createElement(tagType, { className: cn({ type }, [center, mix]) }, children)
}

A_H.propTypes = {
  type: T.oneOf([
    'page', // black 600/22px
    'section', // black Regular 20px
    'user', // black Regular 19px
  ]),
  children: T.any.isRequired,
  mix: T.string,
  center: T.bool,
}

export default A_H
