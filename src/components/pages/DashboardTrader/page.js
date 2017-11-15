import React from 'react'
import './styles.scss'
import { cssClassName } from 'utils'
import M_Board from 'M_Board'
const cn = cssClassName('DashboardTrader')

const DashboardTrader = () => (
  <M_Board
    title = 'Dashboard'
  >
    трейдер
  </M_Board>
)

DashboardTrader.propTypes = {}

export default DashboardTrader
