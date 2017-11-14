import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
import A_Image from 'A_Image'
import A_Span from 'A_Span'

const cn = cssClassName('M_FeedEntry')

const M_FeedEntry = ({ mix, src, name, message, time }) => (
  <div className={cn([mix])}>
    <A_Image width={38} height={38} rounded src={src} alt="userpic" />
    <div className={cn('body')}>
      <A_Span type="feed-name" mix={cn('name')}>{name}</A_Span>
      <A_Span type="feed-message" mix={cn('message')}>{message}</A_Span>
    </div>
    <A_Span type="feed-time" mix={cn('timemark')}>{time}</A_Span>
  </div>
)

M_FeedEntry.propTypes = {
  mix: T.string,
  children: T.any,
  name: T.string.isRequired,
  message: T.string.isRequired,
  time: T.string.isRequired,
  src: T.string.isRequired,
}

export default M_FeedEntry
