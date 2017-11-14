import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
import A_H from 'A_H'
import A_P from 'A_P'
import A_Image from 'A_Image'

const cn = cssClassName('M_Header')

//We just hardcode header for Dashboard here, we'll populate this component later
const M_Header = ({ mix, type }) => (
  <div className={cn({ type }, [mix])}>
    <A_H type="page">Dashboard</A_H>
    <div className={cn('user-block')}>
      <A_P mix={cn('user-name')} type="user-block">Andrew T.</A_P>
      <A_Image alt="userpic" rounded width={44} height={44} src="img/userpics/userpic1.png" />
    </div>
  </div>
)

M_Header.propTypes = {
  mix: T.string,
  type: T.string,
}

export default M_Header
