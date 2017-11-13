import React from 'react'
import T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('A_Image')

const A_Image = ({ type, mx, rounded, realSize, objectFit, ...props }) => (
  <span className={cn('root')}>
    <img
      className={cn('img', { type, objectFit, onClick: !!props.onClick }, [rounded, realSize, mx])}
      {...props}
    />
  </span>
)

A_Image.propTypes = {
  src: T.string.isRequired,
  alt: T.string.isRequired,
  width: T.number,
  height: T.number,
  onClick: T.func,
  objectFit: T.oneOf([
    'contain', // increases or decreases the size of the image to fill the box whilst preserving its aspect-ratio.
    'cover-hidden', // height 100% of width
  ]),
  type: T.oneOf([]),
  realSize: T.bool, // width and height auto
  rounded: T.bool, // rounded Images.
  mx: T.string,
}

export default A_Image
