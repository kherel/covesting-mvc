import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('A_Card')

const A_Card = ({ children, type, mix, ...props }) => (
  <section className={cn({ type }, [mix])} {...props}>{children}</section>
)

A_Card.propTypes = {
  type: T.oneOf([
    'normal',

  ]),
  mix: T.string,
  children: T.node.isRequired,
}

A_Card.defaultProps = {
  type: 'normal',
}
export default A_Card
