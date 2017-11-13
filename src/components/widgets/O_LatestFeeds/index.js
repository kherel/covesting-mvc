import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
import A_TableRow from 'A_TableRow'
import A_Card from 'A_Card'
import A_H from 'A_H'
import A_Link from 'A_Link'
import M_FeedEntry from 'M_FeedEntry'

const cn = cssClassName('O_LatestFeeds')

const O_LatestFeeds = ({ mix }) => (
  <A_Card mix={cn([mix])}>
    <A_H type="section" mix={cn('title')}>
      Latest feeds:
    </A_H>
    <A_Link mix={cn('link')} type="card">
      Show All
    </A_Link>

    <A_TableRow type="feed">
      <M_FeedEntry
        src="img/userpics/userpic6.png"
        name="Ralf Hamster"
        message="Ralf started copying Wael"
        time="5 minutes ago"
      />
    </A_TableRow>

    <A_TableRow type="feed">
      <M_FeedEntry
        src="img/userpics/userpic7.png"
        name="Glenn Webb"
        message="Gleb started copying Wael"
        time="50 minutes ago"
      />
    </A_TableRow>
  </A_Card>
)

O_LatestFeeds.propTypes = {
  mix: T.string,
  children: T.any,
}

export default O_LatestFeeds
