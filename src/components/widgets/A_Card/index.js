import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('A_Card')

const A_Card = ({ children, type, mx, ...props }) => (
  <section className={cn({ type }, [mx])} {...props}>{children}</section>
)

A_Card.propTypes = {
  type: T.oneOf([
    'normal',

  ]),
  mx: T.string,
  children: T.node.isRequired,
}

A_Card.defaultProps = {
  type: 'normal',
}
export default A_Card
